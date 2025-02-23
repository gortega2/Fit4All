import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../classes/api";
import GuideItem from "../../componets/GuideItem/GuideItem";
import './ViewGuidePage.scss';
import ViewRoutine from "../../componets/ViewRoutine/ViewRoutine";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ViewGuidePage() {

    const tempThumbnail = 'http://127.0.0.1:8000/static/images/default-pfp.jpg'
    const mockRating = 4.4
    const navigate = useNavigate();


    const [guide, setGuide] = useState("");
    const [routine, setRoutine] = useState([])
    const { id } = useParams();
    const [exercises, setExercises] = useState([]);

    async function getGuide() {
        try {
            const data = await API.getSingleGuide(id)
            console.log(data);
            setGuide(data);
        } catch (error) {
            console.error(`Error fetching guide ${id}: ${error}`)
        }
    }

    async function getExercises() {
        const data = await API.getExercises();
        setExercises(data);
    }

    async function deleteGuide(){
        try{
            const data = await API.deleteGuide(id)
            navigate("/")
        } catch (error){
            console.error(`There was an error deleting guide ${id}\n${error}`)
        }
    }

    function serializeExercise(oldRoutine){
        const array = [];
        console.log(oldRoutine)

        oldRoutine.forEach( (obj) => {
            const spreadObj = {...obj}
            spreadObj.exercise = exercises.find(ex => ex.id === spreadObj.exercise)
            console.log(spreadObj)
            array.push(spreadObj)
        })

        setRoutine(array)
    }


    useEffect(() => {
        getGuide();
        getExercises();
    }, [id])

    useEffect(() => {
        (guide.routine && serializeExercise(guide.routine))

    },
        [guide])

    return (<main>
        <section className="view-guide">
            <div className="view-guide__header">
                <div className="view-guide__header-ctr">
                    <h2>{guide.title}</h2>
                    <button onClick={() => deleteGuide()} className="cta-action">DELETE</button>
                </div>
                
                <div className="view-guide__header-ctr">
                    <div className="view-guide__flex">
                        <img src={tempThumbnail} className="thumbnail" />
                        <div className="view-guide__text-ctr">
                            <p>By: {guide.author_username}</p>
                            <p>Created: {guide.created_at} | Updated at: {guide.updated_at}</p>
                        </div>
                    </div>
                    <p>Rating: {mockRating}</p>
                </div>
            </div>
            <div className="view-guide__description">
                <h5>{guide.description}</h5>
            </div>
            <h2>THE ROUTINE</h2>
            {/* {routine.length !== 0 && ( <ExerciseListContainer blocks={routine} setBlocks={setRoutine}/>)} */}
            {routine.length !== 0 && (<ViewRoutine routine={routine} />)}



        </section>


    </main>)
}
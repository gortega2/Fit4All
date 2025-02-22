import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../classes/api";
import GuideItem from "../../componets/GuideItem/GuideItem";
import './ViewGuidePage.scss';
import ViewRoutine from "../../componets/ViewRoutine/ViewRoutine";
import axios from "axios";


export default function ViewGuidePage() {

    const tempThumbnail = 'http://127.0.0.1:8000/static/images/default-pfp.jpg'
    const mockRating = 4.4


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
                <h2>{guide.title}</h2>
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
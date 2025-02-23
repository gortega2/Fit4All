import "./CreateGuideForm.scss";
import API from "../../classes/api";
import ExerciseListContainer from "../ExerciseListContainer/ExerciseListContainer";

import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";




export default function CreateGuideForm() {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState("")
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([])
    const [blocks, setBlock] = useState([])
    const navigate = useNavigate()

    async function getAuthors() {
        try {
            const data = await API.getAuthors();
            const array = [];

            data.forEach(element => {
                array.push({ value: element.id, label: element.username })
            });

            setAuthors(array);

        } catch (error) {
            console.error(`There was an error fetching authors:\n${error}`)
        }
    }

    async function getTags() {
        try {
            const data = await API.getTags();
            const array = [];

            data.forEach(element => {
                array.push({ value: element.label, label: element.label })
            });
            
            setTags(array);

        } catch (error) {
            console.error(`There was an error fetching tags:\n${error}`)
        }
    }

    useEffect(() => {
        getAuthors();
        getTags();
    }, [])

    console.log('selected tags are: ',selectedTags);

    async function handleSubmit(event) {
        event.preventDefault();

        // TODO: Do error checking for form submission
        const routine = [];
        const guide_tag = [];

        blocks.forEach(element => {
            const object = {
                exercise: element.exercise.id,
                reps: element.reps,
                // sets: element.sets,
                duration: element.duration,
                weight: element.weight,
            }
            
            routine.push(object)
        });

        selectedTags.forEach( (tag) => {
            guide_tag.push(tag.value);
        })


        const sentObject = {
            author: author,
            title: title,
            description: description,
            guide_tag: guide_tag,
            routine: routine


        }

        console.log(sentObject);

        try{
            const response = await API.postGuide(sentObject);
            console.log(response);
            navigate(`/guides/${response.data.id}`)
        } catch (error) {
            console.error(`There was an error POSTing guide:\n${error}`)
        }
        
    }

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    return (<form className="guide-form" onSubmit={handleSubmit}>
        <h1>CREATE A NEW GUIDE</h1>
        <div className="guide-form__ctr">
            <label className="guide-form__label">
                Title
                <input placeholder="Enter a title..." onChange={handleTitleChange} value={title} />
            </label>

            <label className="guide-form__label">
                Description
                <textarea className='guide-form__text-area' placeholder="Enter a description..." onChange={handleDescriptionChange} value={description} />
            </label>

            <label className="guide-form__label">
                Authors
                <Select options={authors} onChange={(choice) => setAuthor(choice.value)} value={authors.find((object) => object.value === author)} />
            </label>

            <label className="guide-form__label">
                Tags
                <Select isMulti options={tags} onChange={(choice) => setSelectedTags(choice)} />
            </label>
        </div>
        <h2>Set Routine</h2>
        <ExerciseListContainer blocks={blocks} setBlock={setBlock}/>

        


    </form>)
}
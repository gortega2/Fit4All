import "./CreateGuideForm.scss";
import API from "../../classes/api";
import ExerciseListContainer from "../ExerciseListContainer/ExerciseListContainer";

import { useState, useEffect } from "react";
import Select from "react-select";



export default function CreateGuideForm() {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [authors, setAuthors] = useState([]);
    const [author, setAuthor] = useState("")
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([])

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

    function handleSubmit(event) {
        event.preventDefault();
        console.log("do stuff")
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
        <ExerciseListContainer />


    </form>)
}
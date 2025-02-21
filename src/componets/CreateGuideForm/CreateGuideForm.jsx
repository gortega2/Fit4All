import "./CreateGuideForm.scss";
import ExerciseList from "../ExerciseList/ExerciseList";
import { useState, useEffect } from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import API from "../../classes/api";
import ExerciseListContainer from "../ExerciseListContainer/ExerciseListContainer";

export default function CreateGuideForm() {

    const [exercises, setExercises] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function handleSubmit() {
        console.log("do stuff")
    }

    return (<form className="guide-form" onSubmit={handleSubmit}>
        <p>Label placeholders here.</p>
        <ExerciseListContainer />


    </form>)
}
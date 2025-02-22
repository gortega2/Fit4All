import ExerciseList from "../ExerciseList/ExerciseList";
import { useState, useEffect } from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import API from "../../classes/api";

export default function ExerciseListContainer() {

    const [exercises, setExercises] = useState([]);
    const [blocks, setBlock] = useState([])
    const sensors = useSensors(
        useSensor(PointerSensor, {activationConstraint: {
            distance: 5
        }}),
        useSensor(TouchSensor, {activationConstraint: {
            distance: 5
        }}),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    async function getExercises(){
        const data = await API.getExercises();
        setExercises(data);
    }

    useEffect(() => {
        getExercises();
    },[])

    // useEffect(() => {
    //     const array = [];

    //     exercises.forEach((exercise) => {
    //         array.push({id: exercise.id, title: exercise.name})
    //     })
    //     setBlock(array);

    // }, [exercises])

    // console.log(exercises)

    const getBlockPos = id => blocks.findIndex(block =>
        block.id === id
    )

    function handleDragEnd(event) {
        const { active, over } = event

        if (active.id === over.id) return;

        setBlock(blocks => {
            const origPos = getBlockPos(active.id);
            const newPos = getBlockPos(over.id);

            return arrayMove(blocks, origPos, newPos);
        })
    }

    function addBlock(id){

        const addedExercise = exercises.find(exercise => exercise.id == id);
        console.log(addedExercise, id)

        setBlock( (blocks) => {
            return [...blocks, {
                id: blocks.length + 1,
                title: addedExercise.name,
                exercise: addedExercise,
                reps: 0,
                weight: 0,
                duration: 0,
                sets: 2,

            }]
        })

    }

    function deleteBlock(id){
        console.log(id)

        const newBlock = blocks.filter( block => block.id !== id)
        console.log('new block', newBlock)

        setBlock(newBlock)

    }

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <ExerciseList exercises={exercises} blocks={blocks} deleteFunction={deleteBlock} addExercise={addBlock}/>
        </DndContext>)

}
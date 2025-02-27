import ExerciseList from "../ExerciseList/ExerciseList";
import { useState, useEffect } from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import API from "../../classes/api";

export default function ExerciseListContainer({ blocks, setBlock }) {
    

    const [exercises, setExercises] = useState([]);
    const [idcounter, setIdCounter] = useState(0);
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
        setIdCounter(counter => counter + 1);

        setBlock( (blocks) => {
            return [...blocks, {
                id: idcounter,
                exercise: addedExercise,
                reps: 1,
                weight: 1,
                duration: 1,
                sets: 1,

            }]
        })

    }

    function deleteBlock(id){
        const newBlock = blocks.filter( block => block.id !== id)
        setBlock(newBlock)

    }

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <ExerciseList exercises={exercises} blocks={blocks} deleteFunction={deleteBlock} addExercise={addBlock} setBlock={setBlock} />
        </DndContext>
        )

}
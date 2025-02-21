import ExerciseList from "../ExerciseList/ExerciseList";
import { useState, useEffect } from "react";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function ExerciseListContainer() {

    const [blocks, setBlock] = useState([
        { id: 1, title: 'test 1' },
        { id: 2, title: 'test 2' },
        { id: 3, title: 'test 3' },
    ])
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    const getBlockPos = id => blocks.findIndex(block =>
        block.id === id
    )

    function handleSubmit() {
        console.log("do stuff")
    }

    function handleDragEnd(event) {
        const { active, over } = event

        if (active.id === over.id) return;

        setBlock(blocks => {
            const origPos = getBlockPos(active.id);
            const newPos = getBlockPos(over.id);

            return arrayMove(blocks, origPos, newPos);
        })
    }



    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <ExerciseList blocks={blocks} />
        </DndContext>)

}
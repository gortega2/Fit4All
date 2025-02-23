import './ExerciseBlock.scss';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import NumberField from '../NumberField/NumberField';
import { useState, useEffect } from 'react';

export default function ExerciseBlock( {id, block, deleteFunction, setBlock} ){

    const [sets, setSets] = useState(block.sets);
    const [reps, setReps] = useState(block.reps);
    const [weight, setWeight] = useState(block.weight);
    const [duration, setDuration] = useState(block.duration);

   const {attributes, listeners, setNodeRef, transform, transition}
    = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    function handleButtonPress(){
        console.log("Routine button pressed");
    }

    useEffect(() => {
        setBlock((prevData) => {
            console.log(prevData, id);
            const newData = [...prevData];
            newData[id] = {
                id: id,
                reps: reps,
                weight: weight,
                duration: duration,
                sets: sets,
                exercise: block.exercise
            }
            return newData;
        })
    }, [sets, reps, weight, duration])



    return (<div 
    ref={setNodeRef} 
    {...attributes} 
    {...listeners}
    style={style} 
    className='block'>
        <img className='block__thumbnail' src={'https://cdn.shopify.com/s/files/1/1497/9682/files/2_a09de347-1652-4b84-96bf-fdc8bbc42481.jpg?v=1648825457'} alt='exercise thumbnail'/>
        <div className='block__info-ctr'>
            <h4>{block.exercise.name}</h4>
            <div className='block__text-ctr'>
                <NumberField label='Weight(lbs.)' value={block.weight} onChange={setWeight} />
                <p>|</p>
                <NumberField label='Duration(M)' value={block.duration} onChange={setDuration} />
                <p>|</p>
                <NumberField label='Sets' value={block.sets} onChange={setSets} />
                <p>|</p>
                <NumberField label='Reps' value={block.reps} onChange={setReps} />

            </div>
        </div>
        <div className='block__button-ctr'>
            {/* <div className='cta-action cta-action--secondary'>...</div> */}
            <div className='cta-action cta-action--routine' onMouseDown={() => {deleteFunction(id)}}>X</div>
        </div>
        
    </div>)
}
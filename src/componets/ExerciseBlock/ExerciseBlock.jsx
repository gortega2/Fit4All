import './ExerciseBlock.scss';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function ExerciseBlock( {id, title, deleteFunction} ){

   const {attributes, listeners, setNodeRef, transform, transition}
    = useSortable({id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    function handleButtonPress(){
        console.log("Routine button pressed");
    }



    return (<div 
    ref={setNodeRef} 
    {...attributes} 
    {...listeners}
    style={style} 
    className='block'>
        <img className='block__thumbnail' src={'https://cdn.shopify.com/s/files/1/1497/9682/files/2_a09de347-1652-4b84-96bf-fdc8bbc42481.jpg?v=1648825457'} alt='exercise thumbnail'/>
        <div className='block__info-ctr'>
            <h4>{title}</h4>
            <div className='block__text-ctr'>
                <p>Weight: 40 lbs</p>
                <p>|</p>
                <p>Duration: 15 mins</p>
                <p>|</p>
                <p>Sets: 5</p>
            </div>
        </div>
        <div className='block__button-ctr'>
            <div className='cta-action cta-action--secondary'>...</div>
            <div className='cta-action cta-action--routine' onMouseDown={() => {deleteFunction(id)}}>X</div>
        </div>
        
    </div>)
}
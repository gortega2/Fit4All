import './ExerciseList.scss';
import ExerciseBlock from '../ExerciseBlock/ExerciseBlock';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function ExerciseList({ blocks, deleteFunction }) {
    return (
        <div className='exercise-list'>
            <h2 className='exercise-list__add-button' onClick={() => console.log('add exercise')}>+</h2>
            <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
                {blocks.map((block) => {
                    return (<ExerciseBlock id={block.id} title={block.title} key={block.id} 
                    deleteFunction={deleteFunction}/>)
                })}
            </SortableContext>
        </div>
    )
}
import './ExerciseList.scss';
import ExerciseBlock from '../ExerciseBlock/ExerciseBlock';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function ExerciseList({ blocks }) {
    return (
        <div className='exercise-list'>
            <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
                {blocks.map((block) => {
                    return (<ExerciseBlock id={block.id} title={block.title} key={block.id} />)
                })}
            </SortableContext>
        </div>
    )
}
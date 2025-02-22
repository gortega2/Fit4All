import './ExerciseList.scss';
import ExerciseBlock from '../ExerciseBlock/ExerciseBlock';
import { useState } from 'react';
import ExerciseModal from '../ExerciseModal/ExerciseModal';

import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import ReactModal from 'react-modal';

export default function ExerciseList({ exercises, blocks, deleteFunction, addExercise }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal(){
        setIsOpen(true);
    }

    function handleCloseModal(){
        setIsOpen(false);
    }

    return (
        <div className='exercise-list'>
            <h2 className='exercise-list__add-button' onClick={handleOpenModal}>+</h2>
            <ReactModal isOpen={modalIsOpen} contentLabel='Test modal'>
                <ExerciseModal exercises={exercises} closeModal={handleCloseModal} addExercise={addExercise}/>
            </ReactModal>
            <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
                {blocks.map((block) => {
                    return (<ExerciseBlock id={block.id} block={block} key={block.id} 
                    deleteFunction={deleteFunction}/>)
                })}
            </SortableContext>
        </div>
    )
}
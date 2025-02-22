
import './ExerciseModal.scss';
import { useState } from 'react';

const ExerciseModal = ({ exercises, closeModal, addExercise }) => {


    const [selectedExercise, setExercise] = useState(null);

    function handleAddExercise(id){
        addExercise(id);
        closeModal();

    }

    function handleSelectExercise(id){
        console.log(id);
        setExercise(id)
    }

    return (
        <div className='exercise-modal'>
            <h2>Choose an exercise</h2>
            <div className='exercise-modal__list'>
                {exercises.map((exercise) => {
                    return (
                        <div key={[exercise.id]} className='exercise-modal__exercise' onClick={() => handleSelectExercise(exercise.id)}>
                            <img className='exercise-modal__thumbnail' src='https://cdn.shopify.com/s/files/1/1497/9682/files/2_a09de347-1652-4b84-96bf-fdc8bbc42481.jpg?v=1648825457' />
                            <h2>{exercise.name}</h2>
                        </div>
                    )
                })}
            </div>
            <div className='exercise-modal__button-ctr'>
                <button onClick={closeModal} className='exercise-modal__button cta-action cta-action--secondary'>Cancel</button>
                <button className='exercise-modal__button cta-action' disabled={!selectedExercise} onClick={() => handleAddExercise(selectedExercise)}>Add</button>

            </div>
        </div>
    )
}

export default ExerciseModal
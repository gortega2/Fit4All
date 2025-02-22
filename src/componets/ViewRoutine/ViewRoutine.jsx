import React from 'react'
import '../ExerciseList/ExerciseList.scss';
import '../ExerciseBlock/ExerciseBlock.scss';

import { Link } from 'react-router-dom';

const ViewRoutine = ({ routine }) => {

    const mockThumbnail = 'https://cdn.shopify.com/s/files/1/1497/9682/files/2_a09de347-1652-4b84-96bf-fdc8bbc42481.jpg?v=1648825457'
    return (
        <div className='exercise-list'>
            {routine.map((element, index) => {
                return (
                    <Link to={`/exercises/${element.exercise.id}`} className='block' key={index}>
                        <img className='block__thumbnail' src={mockThumbnail} />
                        <div className='block__info-ctr'>
                            <h4>{element.exercise.name}</h4>
                            <div className='block__text-ctr block__text-ctr--start'>
                                <p>Weight: {element.weight}</p>
                                <p>|</p>
                                <p>Duration: {element.duration}</p>
                                <p>|</p>
                                <p>Sets: {element.sets}</p>
                                <p>|</p>
                                <p>Reps: {element.reps}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ViewRoutine
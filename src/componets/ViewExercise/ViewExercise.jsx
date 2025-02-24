import React from 'react';
import './ViewExercise.scss';

const ViewExercise = ({ data }) => {
    return (
        <div className='view-exercise'>
            <h1 className='view-exercise__header'>{data.name}</h1>
            <iframe src={data.video_link} className='view-exercise__video' allowFullScreen />
            <div className='view-exercise__space-between'>
                <div className='view-exercise__text-ctr view-exercise__text-ctr--start'>
                    <h3> Equipment </h3>
                    <div className='view-exercise__center'>
                        {data.equipment.length === 0 && (
                            <p>No equipment listed</p>
                        )}
                        {data.equipment.map((equipment, index) => {
                        return (
                            <div key={index} className='view-exercise__center'>
                                <p>{equipment}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className='view-exercise__text-ctr view-exercise__text-ctr--end'>
                    <h3>Muscle Group</h3>
                    <div className='view-exercise__center'>
                    {data.muscle_group.map((muscle, index) => {
                        return (
                            <div key={index} className='view-exercise__center'>
                                <p>{muscle}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            <h3 className='view-exercise__instructions'>Instructions</h3>
            <p>{data.instructions}</p>




        </div>
    )
}


export default ViewExercise
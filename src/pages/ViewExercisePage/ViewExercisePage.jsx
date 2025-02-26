import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../../classes/api'
import ViewExercise from '../../componets/ViewExercise/ViewExercise'

const ViewExercisePage = () => {
    const {id} = useParams()
    const [data, setData] = useState("");

    async function getData(){
        try{
            const response = await API.getSingleExercise(id);
            setData(response);
        } catch (error) {
            console.error(`There was an error fetching exercise ${id}\n${error}`)
        }
    }
    
    
    useEffect( () => {
        getData();
    },[id])

  return (
    <main className='wrapper'>
        {data && (<ViewExercise data={data}/>)}
    </main>
  )
}

export default ViewExercisePage
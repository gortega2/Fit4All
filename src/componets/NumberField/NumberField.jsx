import React from 'react'
import './NumberField.scss';

const NumberField = ({label, value, onChange}) => {

    function handleInput(event){
        console.log(event.target.value);
        onChange(Number(event.target.value));
    }

  return (
    <label className='number-field'>
        {label}
        <input type='number' min='1' max='999' defaultValue={value} onChange={handleInput}/>
    </label>
  )
}

export default NumberField
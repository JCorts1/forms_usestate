import React from 'react'
import { useState } from 'react'

//Create usestate
//Create label and input.
// Include onchange that is changing the value of Date
//Optional displaying the value as a H1.

const Date = () => {
    const [date, setDate] = useState("");
  return (

    <div className='w-40 h-40 bg-[#626262] rounded-lg flex flex-col justify-center items-center'>
      <label className='text-white' htmlFor="start">Start Date:</label>
      <input onChange={(event) => {
            setDate(event.target.value);
        }}  type="date" className='m-4' />
        <h1>{date}</h1>
    </div>
  )
}

export default Date

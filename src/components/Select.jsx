import React from 'react'
import { useState } from 'react'


//Create useState
//Create form with options 
//Create button type submit
//Create function with handleSubmit. 

const Select = () => {
    const [option, setOption] = useState("");

    function handleSubmite () {
        setOption(target.value)
        console.log(target.value);
    }

  return (
    <div className='w-40 h-40 bg-[#626262] rounded-lg flex justify-center'>
        <form className='flex flex-col '>
            <label className='text-white m-3' htmlFor="fruit">Select a Fruit</label>
            <select name="fruit" id="fruit">
                <option onChange={(event => {
        setOption(event.target.checked)
      })} value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
            <button className='text-white mt-4 w-24 h-6 bg-[#222222] rounded-lg ' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Select

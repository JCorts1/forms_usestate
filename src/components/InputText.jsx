import React from 'react'
import { useState } from 'react'


//First, create a useState with the values that we want to update.
//Inside of Return create the form with the label and the input.
//The input requires the onChange. same sintax... a function that updates the useState.
//Console log is option. Just to check if information is going through
//h1 contains the useState parameter. (is not recommended to use h1 in this way)

const InputText = () => {
    const [textInput, setTextInput] = useState("");

console.log(textInput);

  return (
    <div className='w-80 h-40 bg-[#626262] rounded-lg flex flex-col items-center justify-center '>
      <form className='flex flex-col'>
        <label className='text-white mr-5' htmlFor="textInput">Insert Text here:</label>
        <input onChange={(event) => {
            setTextInput(event.target.value);
        }} id='textInput' type="text" />
      </form>
      <h1 className='text-xl text-white'>{textInput}</h1>
    </div>
  )
}

export default InputText

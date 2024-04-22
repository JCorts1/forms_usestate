import React from 'react'
import { useState } from 'react'

//Create useState
//label and text area. text area should include this function.
//p element displaying new value from text.

const TextArea = () => {
    const [text, setText] = useState("");


  return (
    <div className='w-80 h-40 bg-[#626262] flex flex-col rounded-lg'>
      <label className='text-xl text-white mr-5' htmlFor="textArea">TextArea:</label>
      <textarea onChange={(event)=> {
        setText(event.target.value);
      }} name="textArea" id="textArea" cols="20" rows="5">Insert your text in this text area</textarea>
      <p className='text-white'>{text}</p>
    </div>
  )
}

export default TextArea

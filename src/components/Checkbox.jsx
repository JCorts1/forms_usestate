import React from 'react'
import { useState } from 'react'

//First Create useState.
//Create Checkbox.
//Input. add onChange with event with a function setting a new valie for check "setCheck"
//log is optional to see the result.

const Checkbox = () => {

const [check, setCheck] = useState("");
console.log(check);

  return (
    <div className='flex flex-col items-center w-40 h-40 bg-[#626262] rounded-lg'>
      <label className='m-5 text-white' htmlFor="check">Checkbox</label>
      <div>
      <label className='m-1 text-white' htmlFor="first">First</label>
      <input onChange={(event => {
        setCheck("first " + event.target.checked)
      })} id='first' type="checkbox" />
      </div>
      <div>
      <label className='m-1 text-white' htmlFor="second">Second</label>
      <input onChange={(event) => {
        setCheck("Second " + event.target.checked)
      }} id='second' type="checkbox" />
      </div>
      <div>
      <label className='m-1 text-white' htmlFor="third">Third</label>
      <input onChange={(event)=> {
        setCheck("Third " + event.target.checked)
      }} id='third' type="checkbox" />
      </div>

    </div>
  )
}

export default Checkbox

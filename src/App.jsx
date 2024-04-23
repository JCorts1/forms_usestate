import React from 'react'
import InputText from './components/InputText'
import TextArea from './components/TextArea'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Select from './components/Select'
import Date from './components/Date'

const App = () => {


  return (
    <div className='w-screen h-screen bg-[#222222] flex justify-evenly'>
      <InputText />
      <TextArea />
      <Checkbox />
      <Radio />
      <Select />
      <Date />

    </div>
  )
}

export default App

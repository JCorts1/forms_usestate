import React from "react";
import { useState } from "react";

//First create useState.
// Create function that is going to handle the radio change.
//Create the inputs with labels.
//inside of the inpute add the value (value="the value")
//Create checked with conditional.
//Create onChange and it will execute the function to change the value from the userState.

const Radio = () => {
  const [selectOpt, setSelectOpt] = useState("");
  console.log(selectOpt);

  const handleRadioChange = (event) => {
    setSelectOpt(event.target.value);
  };

  return (
    <div className="w-40 h-40 bg-[#626262] flex flex-col justify-center items-center rounded-lg">
      <label className="text-white" htmlFor="optOne">
        Option 1
        <input onChange={handleRadioChange} checked={selectOpt == "option1"} value="option1" className="ml-3" id="optOne" type="radio" />
      </label>
      <label className="text-white" htmlFor="optTwo">
        Option 2
        <input onChange={handleRadioChange} checked={selectOpt == "option2"} value="option2" className="ml-3" id="optTwo" type="radio" />
      </label>
      <label className="text-white" htmlFor="optThree">
        Option 3
        <input onChange={handleRadioChange} checked={selectOpt == "option3"} value="option3" className="ml-3" id="optThree" type="radio" />
      </label>
    </div>
  );
};

export default Radio;

import React from "react";
import { useState } from "react";

//Create useState
//Create form with options
//Create button type submit
//Create function with handleSubmit.
//add value to select so that means that selector has the value of selectedFruit.
//add on change to select.
// Add UseState with values Show and setShow. 

const Select = () => {
  const [selectedFruit, setSelectedFruit] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected fruit:", selectedFruit);
    setShow(true);
  };

  return (
    <div className="w-40 h-40 bg-[#626262] rounded-lg flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label className="text-white m-3" htmlFor="fruit">
          Select a Fruit
        </label>
        <select
          name="fruit"
          id="fruit"
          value={selectedFruit}
          onChange={(event) => {
            setShow(false);
            setSelectedFruit(event.target.value);
          }}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
        <button
          className="text-white mt-4 w-24 h-6 bg-[#222222] rounded-lg "
          type="submit"
        >
          Submit
        </button>
      </form>
      <h1>{show && selectedFruit}</h1>
    </div>
  );
};

export default Select;

import React, { useState } from 'react'

const Body = () => {

  const [jsonInput , setJsonInput] = useState("");
  // const [isValidJson , setIsValidJson] = useState(true);

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
    // console.log(jsonInput);
    // try {
    //   JSON.parse(jsonInput);
    //   setIsValidJson(true);
    // } catch (error) {
    //   setIsValidJson(false);
    // }
  }

  return (
    <div>
      <textarea 
      className='outline-none border'
        rows="8" 
        cols="126"
      onChange={handleInputChange}
      ></textarea>
      {
       <>
        <div>{jsonInput}</div>
       </>
      }
    </div>
  )
}

export default Body
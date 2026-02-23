import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../../contextApi/ContextApp";

const InputRequest = () => {
  const { responseData ,  setResponseData  } = useContext(ContextApp);
  const [inputUrl , setInputUrl] = useState("");
 
  const options = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
    { value: "PUT", label: "PUT" },
    { value: "PATCH", label: "PATCH" },
    { value: "DELETE", label: "DELETE" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const fetchData = async() => {
    const response = await fetch(`${inputUrl}`);
    const data = await response.json();
    console.log("data" , data);
    setResponseData(data);
  }

  console.log("responseData" , responseData);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Do something....
    console.log("inputUrl" , inputUrl);
    fetchData();
    setInputUrl('');
  };

  return (
    <div className="flex gap-2">
      <form onSubmit={handleSubmit} className="flex border border-gray-300 p-2">
        <div>
          <select
          value={selectedValue}
          onChange={handleChange}
          className="outline-none pr-5 border-r-1 border-gray-400"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <input
          className="outline-none pl-2"
          type="text"
          placeholder="Enter URL or paste text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        </div>
        <button 
        type="submit"
        className="p-2 bg-blue-400 pl-8 pr-8 rounded" >
          Send
        </button>
      </form>
    </div>
  );
};

export default InputRequest;

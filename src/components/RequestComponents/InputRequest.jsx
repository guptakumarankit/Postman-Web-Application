import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ContextApp } from "../../contextApi/ContextApp";
import Loader from "../utils/Loader";
import { DiJava } from "react-icons/di";

const InputRequest = () => {
  const { responseData, setResponseData , setStatusCode , setStatusText , setResponseTime , loading , setLoading , error , setError , currentMethod , setCurrentMethod  , History , setHistory } = useContext(ContextApp);
  
  const [inputUrl, setInputUrl] = useState("");

  const suggestionsList = ["GET", "POST", "PATCH", "PUT", "DELETE"];
  const [input, setInput] = useState("GET");
  const [show, setShow] = useState(false);

  const filtered = suggestionsList.filter((item) =>
    item.toLowerCase().startsWith(input.toLowerCase()),
  );

  const handleSelect = (value) => {
    setInput(value);
    setShow(false);
    setCurrentMethod(value);
  };
  
  const isDisabled = (inputUrl.length <= 0);
  // console.log(isDisabled);
 
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setStatusCode('');
    setStatusText('');
    setResponseData(null)
    try {
        const startTime = performance.now();
        const response = await fetch(`${inputUrl}`);
        setStatusCode(response.status);
        setStatusText(response.statusText)
        // console.log("response" , response);
        const endTime = performance.now();
        setResponseTime(parseInt(endTime - startTime))
        // console.log("time: " , endTime - startTime);
        // console.log("StatusCode" , response.status);
        // console.log("statusText" , response.statusText);
        // console.log("api fetch status" , response.ok)
        // console.log("Api Method" , response.method);
        console.log("method" , response.method);

        // if(currentMethod == 'GET'){
        //   console.log("GET");
        // }
        // else if((response.method != undefined && currentMethod != GET) || response.method != currentMethod){
        //   setError("Click Method of the api");
        //   return;
        // }

        const data = await response.json();
        console.log("data", data);
        setResponseData(data);
    } catch (error) {
      // setError(error);
    }
    finally{
      setLoading(false);
    }
  };


  console.log("responseData", responseData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inputUrl", inputUrl);
    console.log("click")
    fetchData();
    // setInputUrl("");
    console.log(currentMethod , inputUrl)
    // const newHistory = [...History , {}]
        // setHistory((prev) =>
        //     prev.map((obj) => ({
        //       ...obj,
        //       currentMethod: inputUrl
        // }))
    // );
  };

  return (
    <div className="flex gap-2 h-[10%] w-full">
      <form onSubmit={handleSubmit} className="w-full flex border border-gray-300">
          <div className="w-[15%] relative">
            <div className="flex">
              <input
                type="text"
                value={input}
                onClick={() => setShow(true)}
                onChange={(e) => {
                  setInput(e.target.value);
                  setShow(true);
                }}
                className="w-full px-3 py-2 rounded-l outline-none"
                placeholder="Methods"
              />
              <div
                onClick={() => setShow(!show)}
                className="absolute right-1 top-4 rounded-r"
              >
                <FaChevronDown />
              </div>
            </div>
            {show && (
              <div className="border w-full bg-white absolute">
                {filtered.length > 0 &&
                  filtered.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect(item)}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))
               }
              </div>
            )}
          </div>

          <div className="w-[75%]">
              <input
              className="outline-none w-full p-1  hover:border hover:border-2 border-blue-300 rounded"
              type="text"
              placeholder="Enter URL or paste text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
            />
          </div>

          <button 
          type="submit" 
          disabled={isDisabled}
          className="w-[10%] p-2 bg-blue-400 pl-8 pr-8 rounded">
            {loading ? <Loader/> : "Send"}
          </button>
      </form>
    </div>
  );
};

export default InputRequest;

import React, { useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ContextApp } from "../../contextApi/ContextApp";
import Loader from "../utils/Loader";
import { DiJava } from "react-icons/di";
import toast , { Toaster } from 'react-hot-toast'

const InputRequest = () => {
  const {
    responseData,
    setResponseData,
    setStatusCode,
    setStatusText,
    setResponseTime,
    loading,
    setLoading,
    error,
    setError,
    currentMethod,
    setCurrentMethod,
    History,
    setHistory,
    inputUrl,
    setInputUrl,
    parsedJsonData,
  } = useContext(ContextApp);

  const suggestionsList = ["GET", "POST", "PATCH", "PUT", "DELETE"];
  const [input, setInput] = useState("GET");
  const [show, setShow] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setInput(currentMethod);
  }, [currentMethod]);

  const filtered = isTyping
    ? suggestionsList.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase()),
      )
    : suggestionsList;

  const handleSelect = (value) => {
    setInput(value);
    setShow(false);
    setIsTyping(false);
    setCurrentMethod(value);
  };

  const handleClickInput = () => {
    setShow(true);
    setIsTyping(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setShow(true);
    setIsTyping(true);
  };

  const handleDropdownClick = () => {
    setShow(!show);
    setIsTyping(false);
  };

  const isDisabled = inputUrl.length <= 0;

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);
    setStatusCode("");
    setStatusText("");
    setResponseData(null);

    try {
      const startTime = performance.now();
      let response = null;
      if (
        parsedJsonData &&
        (currentMethod.toLowerCase() == "POST".toLowerCase() ||
          currentMethod.toLowerCase() == "PUT".toLowerCase())
      ) {
        response = await fetch(`${url}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedJsonData),
        });
      } else if (currentMethod.toLowerCase() == "GET".toLowerCase()) {
        response = await fetch(`${url}`);
      } else {
        setError("Cannot Post / Put");
        return;
      }
      setStatusCode(response.status);
      setStatusText(response.statusText);
      const endTime = performance.now();
      setResponseTime(parseInt(endTime - startTime));
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const UpdateHistory = () => {
    if (!inputUrl.trim()) return;

    const newEntry = { currentMethod, inputUrl };

    let updatedHistory = [
      newEntry,
      ...History.filter(
        (item) => !(item.method === currentMethod && item.url === inputUrl),
      ),
    ];

    updatedHistory = updatedHistory.slice(0, 5);

    setHistory(updatedHistory);
    localStorage.setItem("requestHistory", JSON.stringify(updatedHistory));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("inputUrl" , inputUrl);
    const saved = JSON.parse(localStorage.getItem("environment")) || {};

    if (saved != {} && inputUrl.startsWith('{{')) {
      const regex = /{{(.*?)}}/g;
      const matches = inputUrl.match(regex);
      const findKey = matches.map((match) =>
        match.replace(/[{}]/g, "").trim(),
      )[0];
      console.log(findKey);
      console.log(
        findKey !== saved.key && saved.value.startsWith("http") == false,
      );

      if (findKey !== saved.key) {
        console.log("invalid section");
        // setResponseData(null);
        setError("Invalid Url");
        return;
      } else if (saved.value.startsWith("http") == false) {
        console.log("invalid section")
        // setResponseData(null);
        setError("Invalid Url");
        return;
      } else {
        console.log("first");
        const startIndex = inputUrl.indexOf(saved.key);
        const endIndex = startIndex + saved.key.length + 2;
        const newString = saved.value + inputUrl.slice(endIndex);
        // console.log("newString" , newString);
        fetchData(newString);
      }
    } else if (inputUrl.startsWith("http") == false) {
      setError("Invalid Url");
      // setResponseData(null);
      setStatusCode("");
      setStatusText("");
      console.log("second");
      return;
    } else {
      console.log("third");
      fetchData(inputUrl);
    }
    UpdateHistory();
  };

  return (
    <div className="flex gap-2 h-[10%] w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full flex border border-gray-300"
      >
        <div className="w-[15%] relative">
          <div className="flex">
            <input
              type="text"
              value={input}
              onClick={handleClickInput}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-l outline-none"
              placeholder="Methods"
            />
            <div
              onClick={handleDropdownClick}
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
                ))}
            </div>
          )}
        </div>

        <div className="w-[75%]">
          <input
            className="outline-none w-full p-3  hover:border hover:border-2 border-blue-300 rounded"
            type="text"
            placeholder="Enter URL or paste text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-[10%] p-2 bg-blue-400 pl-8 pr-8 rounded"
        >
          {loading ? <Loader /> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default InputRequest;

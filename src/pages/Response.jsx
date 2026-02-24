import React, { useContext, useState } from "react";
import ResponseBody from "../components/ResponseComponents/ResponseBody";
import ResponseHeader from "../components/ResponseComponents/ResponseHeader";
import { ContextApp } from "../contextApi/ContextApp";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/utils/Loader";

const Response = () => {
  const { statusCode, responseData, statusText, responseTime , loading , error } =
    useContext(ContextApp);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "Body", content: <ResponseBody /> },
    { name: "Headers", content: <ResponseHeader /> },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(
      JSON.stringify(responseData.products, null, 2),
    );
    console.log("Click on Copy");
    toast.success("Copy Data SuccessFully");
  };

  console.log

  return responseData == null ? (
    <div className="h-[40%] border h-full ">
      <h1>Response</h1>
      <div className="h-full w-full flex justify-center items-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>Could not send request Error is Occur</div>
        ) : (
          <div className="text-gray-700">
            Enter the URL and Click Send to get a Response
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="h-full border">
      <Toaster position="top-center" />
      <div className="flex justify-between p-1 bg-gray-300">
        <div className="flex gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={
                activeTab === index
                  ? "active  border-b-2 border-orange-300"
                  : ""
              }
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <p>{statusCode}</p>
            <p>{statusText}</p>
          </div>
          <h1>{`${responseTime} ms`}</h1>
          <button
            className="bg-blue-300 pl-2 pr-2 rounded"
            onClick={handleCopy}
          >
            copy
          </button>
        </div>
      </div>
      <div className="h-full w-full ">
        <h2>{tabs[activeTab].content}</h2>
      </div>
    </div>
  );
};

export default Response;

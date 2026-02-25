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
    console.log("rep" , responseData);
    if(responseData){
      navigator.clipboard.writeText(
        JSON.stringify(responseData, null, 2),
      );
      console.log("click");
      toast.success("Copy Data SuccessFully");
    }
    else{
      toast.success("Data Not exist")
    }
  };
  
  return (
    <div className="h-[50%] w-full border">
      {
        loading ? (
        <div className="h-full w-full flex justify-center items-center">
          <Loader/>
        </div>
     ) : (error === null && responseData === null) ? (
        <div className=""> 
          <h1>Response</h1>
            <p className="w-full h-45 flex justify-center items-center">Enter the URL and Check Send to get a response</p>
        </div>
     ) : (statusCode != "" && statusText != "") ? (
        <div>
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
     ) :  (
         <div className=""> 
          <h1>Response</h1>
            <p className="w-full h-45 flex justify-center items-center">{error}</p>
        </div>
     )
      }
    </div>
  );
};

export default Response;

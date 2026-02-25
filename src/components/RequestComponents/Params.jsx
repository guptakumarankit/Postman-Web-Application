import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../../contextApi/ContextApp";

const Params = () => {
  const { inputUrl , setInputUrl} = useContext(ContextApp);
  const [checkBoxValue , setCheckBoxValue] = useState(false);
  const [keyInput , setKeyInput] = useState("");
  const [valueInput , setValueInput] = useState("");


  useEffect(() => {
    if(keyInput == "" && valueInput == ""){
      return;
    }

    const ParamsString = `?${keyInput}=${valueInput}`;
    if(checkBoxValue){
        const newUrl = inputUrl + ParamsString;
        setInputUrl(newUrl);
    }
    else{
      const startIndex = inputUrl.indexOf(ParamsString);
      const endIndex = startIndex + ParamsString.length;
      const newString = inputUrl.slice(0, startIndex) + inputUrl.slice(endIndex);
      setInputUrl(newString);
    }
  },[checkBoxValue])

  return (
    <div className="flex flex-col gap-3">
      <h1 className="mt-3 ml-5 text-bold">Query Params</h1>
      <table className="w-[90%] ml-5 text-sm text-left text-gray-500 border">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
          <tr className="">
            <th className="p-1 border-r-1">key</th>
            <th className="p-1">Value</th>
          </tr>
        </thead>
        <tbody className="gap-3">
          <tr className="bg-white hover:bg-gray-50 ">
            <td>
              <input 
              type="text" 
              placeholder="Key" 
              className="w-full p-1 border-r-1"
              onChange={(e) => setKeyInput(e.target.value)} />
            </td>
            <td>
              <input type="text" 
              placeholder="Value" 
              className="w-full p-1"
              onChange={(e) => setValueInput(e.target.value)} />
            </td>
            <td>
              <input 
              type="checkbox" 
              value={checkBoxValue}
              onChange={() => setCheckBoxValue(!checkBoxValue)}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Params;

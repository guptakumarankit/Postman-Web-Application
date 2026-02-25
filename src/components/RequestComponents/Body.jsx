import { useContext, useState } from "react";
import { ContextApp } from "../../contextApi/ContextApp";

const Body = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonError, setJsonError] = useState(null);
  const {  parsedJsonData ,
        setParsedJsonData , currentMethod } = useContext(ContextApp);

  const handleChange = (e) => {
    const value = e.target.value;
    setJsonInput(value);

    if (value.trim() === "") {
      setJsonError(null);
      setParsedJsonData(null);
      return;
    }

    try {
      const parsed = JSON.parse(value);
      setParsedJsonData(parsed);  
      setJsonError(null);
    } catch (error) {
      setJsonError("Invalid JSON format");
      setParsedJsonData(null);
    }
  };

  console.log("parsedData" , parsedJsonData);

  return (
     (currentMethod.toLowerCase() == ("POST").toLowerCase() || 
     currentMethod.toLowerCase() == ("PUT").toLowerCase()) && <div className="w-full h-full mx-auto">
      <textarea
        value={jsonInput}
        onChange={handleChange}
        placeholder="Enter JSON here..."
        className={`w-full h-40 border p-3 rounded outline-none ${
          jsonError ? "border-red-500" : "border-gray-300"
        }`}
      />
    </div>
  )
}

export default Body
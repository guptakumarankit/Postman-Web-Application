import { createContext, useEffect, useState } from "react";
export const ContextApp = createContext();

export const ContextProvider = ({children}) => {
    const [responseData , setResponseData] = useState(null);
    const [statusCode , setStatusCode] = useState("");
    const [statusText , setStatusText] = useState("");
    const [responseTime , setResponseTime] = useState(0);
    const [loading , setLoading] = useState(false); 
    const [error , setError] = useState(null);
    const [currentMethod , setCurrentMethod] = useState("GET")
    const [History , setHistory] = useState([{}]);
    const [inputUrl, setInputUrl] = useState("");
    const [parsedJsonData , setParsedJsonData] = useState(null); 

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("requestHistory")) || [];
        setHistory(saved);
    }, []);

   
 
    const value = {
        responseData,
        setResponseData ,
        statusCode,
        setStatusCode , 
        statusText,
        setStatusText,
        responseTime,
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
        parsedJsonData ,
        setParsedJsonData
    }

    return (
        <ContextApp.Provider value={value}>
            {children}
        </ContextApp.Provider>
    )
}
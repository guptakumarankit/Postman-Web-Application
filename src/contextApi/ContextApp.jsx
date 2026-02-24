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

    // console.log("currentMethod" , currentMethod);
    console.log(History);
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
        setHistory
    }

    // console.log(statusCode);

    return (
        <ContextApp.Provider value={value}>
            {children}
        </ContextApp.Provider>
    )
}
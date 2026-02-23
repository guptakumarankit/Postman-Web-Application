import { createContext, useEffect, useState } from "react";
export const ContextApp = createContext();

export const ContextProvider = ({children}) => {
    const [responseData , setResponseData] = useState('');

    const value = {
        responseData,
        setResponseData
    }

    return (
        <ContextApp.Provider value={value}>
            {children}
        </ContextApp.Provider>
    )
}
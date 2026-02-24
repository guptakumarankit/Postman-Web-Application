import React, { useContext, useEffect, useState } from 'react'
import { ContextApp } from '../../contextApi/ContextApp'
import JsonView from "@uiw/react-json-view";

const ResponseBody = () => {
  const { responseData } = useContext(ContextApp);
  return (
    <div>
      { 
      <pre className='overflow-auto max-h-70 p-2'>
        <JsonView
        className=''
          value={responseData}
          collapsed={1}
          style={{
            color: "#ff0000"
          }}
        />  
      </pre>}
    </div>
  )
}

export default ResponseBody
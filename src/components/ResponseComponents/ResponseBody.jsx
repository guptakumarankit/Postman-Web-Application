import React, { useContext } from 'react'
import { ContextApp } from '../../contextApi/ContextApp'

const ResponseBody = () => {
  const { responseData } = useContext(ContextApp);
  const prettyPrintedJson = JSON.stringify(responseData.users, null, 2);

  return (
    <div>
      {
        responseData ? (
          <div></div>
        ) :(
          <div>
            {prettyPrintedJson}
          </div>
        )
      }
    </div>
  )
}

export default ResponseBody
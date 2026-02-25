import React, { useContext } from 'react'
import { ContextApp } from '../../contextApi/ContextApp'

const History = () => {
  const { History  , setCurrentMethod , setInputUrl} = useContext(ContextApp);

  const handleClick = (currentHistory) => {
    setCurrentMethod(currentHistory.currentMethod);
    setInputUrl(currentHistory.inputUrl);
  }

  return (
    <div className='h-screen w-[90%] mt-4 p-2 flex flex-col gap-3 overflow-hidden'>
      <div className='text-center text-xl'>History</div>
      {
        History && (
          History.map((history , idx) => (
              <div
              key={idx} 
              className='flex gap-1 p-1 bg-gray-200 rounded '
              onClick={() => handleClick(history)}>
                <div>{history.currentMethod}</div>
                <div>{history.inputUrl}</div>
              </div>
          ))
        )
      }
    </div>
  )
}

export default History
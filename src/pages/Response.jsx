import React, { useState } from 'react'
import ResponseBody from '../components/ResponseComponents/ResponseBody';
import ResponseHeader from '../components/ResponseComponents/ResponseHeader';


const Response = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'Body', content: <ResponseBody/> },
    { name: 'Headers', content: <ResponseHeader/> },
  ];

  return (
    <div className="">
      <div className="flex justify-between">
       <div className='flex gap-4'>
         {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? 'active  border-b-2 border-orange-300' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
       </div>
       <div className='flex gap-4'>
          <div className='flex gap-4'>
            <p>StatusCode</p>
            <p>StatusText</p>
          </div>
          <h1>ResponseTime</h1>
       </div>
      </div>
      <div className="h-[50px] w-full border">
        <h2>{tabs[activeTab].content}</h2>
      </div>
    </div>
  );
}

export default Response
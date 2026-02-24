import React, { useState } from 'react'
import Params from '../components/RequestComponents/Params';
import Headers from '../components/RequestComponents/Headers';
import Body from '../components/RequestComponents/Body';

const Request = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Params', content: <Params/> },
    { name: 'Headers', content: <Headers/> },
    { name: 'Body', content: <Body/> },
  ];

  return (
    <div className="h-[60%] border">
      <div className="flex gap-4 p-2 bg-gray-300">
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
      <div className="">
        <h2>{tabs[activeTab].content}</h2>
      </div>
    </div>
  );
}

export default Request
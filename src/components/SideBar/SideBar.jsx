import { useState } from "react";
import Environments from "./Environments";
import History from "./History";

const SideBar = () => {
    const [activeTab , setActiveTab] = useState(0);
    const tabs = [
        {
            name:"Enviro.",
            content: <Environments />,
        },
        {
            name:"History",
            content: <History />
        }
    ];

  return (
    <>
      <div className="flex flex-col bg-gray-900 h-screen w-[20%] text-gray-100 border border-gray-700 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
             `h-20  ${activeTab === index? "active p-1 border-1 bg-gray-950 " : ""}`
            }
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="">
        <h2>{tabs[activeTab].content}</h2>
      </div>
    </>
  );
};

export default SideBar;

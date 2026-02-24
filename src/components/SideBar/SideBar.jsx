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
      <div className="flex flex-col bg-gray-300 h-screen w-[20%] border border-r-indigo-500">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
             `h-20  ${activeTab === index? "active  border-b-2 border-orange-300 bg-orange-400" : "bg-gray-300"}`
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

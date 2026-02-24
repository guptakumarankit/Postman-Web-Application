import InputRequest from "./components/RequestComponents/InputRequest"
import SideBar from "./components/SideBar/SideBar"
import Request from "./pages/Request"
import Response from "./pages/Response"


const App = () => {

  return (
     <div className='flex gap-2'>
        <div className="h-full w-[25%] flex">
          <SideBar/>
        </div>
        <div className="flex flex-col h-[100vh] w-full overflow-hidden">
          <InputRequest/>
          <Request/>
          <Response/>
        </div>
    </div>
  )
}

export default App
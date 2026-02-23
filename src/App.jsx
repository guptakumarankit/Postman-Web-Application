import InputRequest from "./components/RequestComponents/InputRequest"
import Request from "./pages/Request"
import Response from "./pages/Response"

const App = () => {

  return (
     <div className='flex flex-col gap-5'>
        <InputRequest/>
        <Request/>
        <Response/>
    </div>
  )
}

export default App
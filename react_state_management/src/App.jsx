import { createContext, useContext, useState } from "react"
import { CountContext } from "./context"

function App() {
  const [count, setCount] = useState(0)
  const contextVal = {count, setCount}
  return (
    <>
      <CountContext.Provider value={contextVal}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer(){
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase Count</button>

    <button onClick={()=>{
      count>=1?(
        setCount(count-1)
      )
      : null
    }}>Decrease Count</button>
  </div>

}

export default App
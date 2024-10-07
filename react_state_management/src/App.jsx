import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, isEven } from "./store/atoms/count"


function App() {
  return (
    <RecoilRoot>
        <Count />
    </RecoilRoot>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
    <EvenText />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count=> count +1)
    }}>Increase Count</button>

    <button onClick={()=>{
      setCount(count => count>0? count -1: count)
    }}>Decrease Count</button>
  </div>

}

function EvenText(){
  const text = useRecoilValue(isEven)
  return <b>{text}</b>
}

export default App
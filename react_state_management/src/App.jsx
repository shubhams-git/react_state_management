import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./store/atoms/count"


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

export default App
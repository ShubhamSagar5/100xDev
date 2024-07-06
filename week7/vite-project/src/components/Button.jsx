import { useContext } from "react"
import CounterContext from "../CounterContext"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "../store/atom/countAtom"


const Button = () => {
    
    // const {count,setCount} = useContext(CounterContext)
    
    // const [count,setCount] = useRecoilState(countAtom)
    // const count = useRecoilValue(countAtom)
    const setCount = useSetRecoilState(countAtom)

    return (
        <div>
            <button onClick={() => {
            setCount((count)=>count + 1)}
            } style={{marginRight:"10px"}}>+</button>
            <button  onClick={() => {setCount((count)=>count - 1)}}>-</button>
        </div>
    )
}


export default Button
import { useContext } from "react"
import CounterContext from "../CounterContext"


const Button = () => {
    
    const {count,setCount} = useContext(CounterContext)
    
    return (
        <div>
            <button onClick={() => {
            setCount(count + 1)}
            } style={{marginRight:"10px"}}>+</button>
            <button  onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    )
}


export default Button
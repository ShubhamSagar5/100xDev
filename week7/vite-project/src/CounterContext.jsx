import { createContext } from "react";


const CounterContext = createContext({
    count:0,
    setCount:()=>{}
})

export default CounterContext
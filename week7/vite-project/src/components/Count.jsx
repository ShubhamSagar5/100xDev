import React, { useContext } from 'react'
import CounterContext from '../CounterContext'

const Count = () => {
  
    const {count,setCount} = useContext(CounterContext)

    return (
    <div>{count}</div>
  )
}

export default Count
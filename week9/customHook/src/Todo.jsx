import React from 'react'
import { useEffect } from 'react'
import useTodo from './useTodo'
import useDebounce from './useDebounce'
import { useState } from 'react'

const Todo = () => {
  

    const data = useTodo()
    const todo = data.todo
    const loading = data.loading 
    const net = data.net

    const [txt,setTxt]  = useState('')
    const datav = useDebounce(txt,5)
    console.log(datav)
   

    useEffect(()=>{
        console.log('compoenet mount')

        return () => {
            console.log('component did unmount')
        }
    },[])
  

    if(loading){
        return <div>Loading!!</div>
    }

    return (
    <div>Todo 
    
    {
        net ? ' online' : ' offline'
    }
    
    <input type="text" onChange={(e)=>setTxt(e.target.value)} value={txt} />
    {datav}
    </div>
    
  )
}

export default Todo
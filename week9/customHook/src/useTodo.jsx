import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useTodo = () => {
  
    const [todo,setTodo] = useState([])
    const [loading,setLoading] = useState(true)

    const [net,setnet] = useState(window.navigator.onLine)

    const getData = async() => {
        const res = await fetch('https://sum-server.100xdevs.com/todos')
        const data =  await res.json() 
        setTodo(data.todos)
        setLoading(false)
    }

    useEffect(()=>{
       getData()
       
       window.addEventListener('online',()=>{
        setnet(true)
       })

       window.addEventListener('offline',()=>{
        setnet(false)
       })
       
    },[])

    return {todo,loading,net}

}

export default useTodo
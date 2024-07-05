import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Button from './components/Button'
import CounterContext from './CounterContext'
import Counter from './components/Counter'

function App() {
  
const [count,setCount] =  useState(0)

  return (
    <div>
      <h2>Counter App</h2>
      <CounterContext.Provider value={{count,setCount}}>
       <Counter/>
      </CounterContext.Provider>
    
    </div>
  )
}

export default App

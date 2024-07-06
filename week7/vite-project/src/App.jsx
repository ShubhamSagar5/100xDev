import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Button from './components/Button'
import CounterContext from './CounterContext'
import Counter from './components/Counter'
import {RecoilRoot} from 'recoil'

function App() {
  
const [count,setCount] =  useState(0)

  return (
    <RecoilRoot>
       <div>
      <h2>Counter App</h2>
      <Counter/>





      {/* <CounterContext.Provider value={{count,setCount}}>
       <Counter/>
      </CounterContext.Provider> */}
    
    </div>
    </RecoilRoot>
   
  )
}

export default App

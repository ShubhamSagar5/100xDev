import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot} from 'recoil'
import Main from './components/Main'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
     
          <Main/>
        <Todo id={1}/>
        <Todo id={2}/>
        <Todo id={5}/>
    </RecoilRoot>
    
  )
}

export default App

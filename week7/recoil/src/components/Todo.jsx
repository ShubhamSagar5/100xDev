import React from 'react'
import { atom, useRecoilValue } from 'recoil'
import { todoAtomFamily } from '../atom'


const todoAtom = atom({
    key:'todoAtom',
    default:{
    id:1,
    title:"Got to the gym",
    description:"hit the gym from 7-9"
    }
})


const Todo = ({id}) => {
  const todo = useRecoilValue(todoAtomFamily(id))
    return (
    <div>
        <h2>{todo.title}</h2>
        <h3>{todo.description}</h3>
    </div>
  )
}

export default Todo
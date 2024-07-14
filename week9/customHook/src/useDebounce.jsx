import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useDebounce = (v,time) => {
  
  const [value,setValue] = useState(v)

  useEffect(()=>{

    const timout = setTimeout(()=>{
      setValue(v)
    },time * 1000)

    return () => {
      clearTimeout(timout)
    }

  },[v])

  return value

}

export default useDebounce
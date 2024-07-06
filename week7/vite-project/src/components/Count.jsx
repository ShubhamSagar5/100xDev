import React, { useContext } from 'react'
import CounterContext from '../CounterContext'
import { useRecoilValue } from 'recoil'
import { checkEven, countAtom } from '../store/atom/countAtom'

const Count = () => {
  
    // const {count,setCount} = useContext(CounterContext)
    const count  = useRecoilValue(countAtom)
    const checkEven2 = useRecoilValue(checkEven)
    return (
    <div>
        <div>{count}</div>
        <h2>{checkEven2}</h2>
        {/* <h2>
          {count % 2 == 0 ? 'Its even ' : 'its odd'}
        </h2> */}

       
    </div>

    
  )
}

export default Count
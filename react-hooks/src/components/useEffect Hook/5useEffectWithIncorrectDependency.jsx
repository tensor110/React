// useEffect with incorrect dependency
import React, { useEffect, useState } from 'react'

function HookCounterFive() {
    const[count,setCount]= useState(0)
    const tick = () =>{
        // setCount(count+1)  //In this case we have to declare the dependency as count 
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        const interval= setInterval(tick,1000)
        return () =>{
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
      {count}
    </div>
  )
}

export default HookCounterFive

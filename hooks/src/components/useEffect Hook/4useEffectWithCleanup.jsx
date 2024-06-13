// useEffect with cleanup - used for canceling subscriptions, timers etc 
import React, { useState,useEffect } from 'react'
import HookCounterThree from './3RunEffectOnlyOnce'

function HookCounterFour() {
const [x,setX]= useState(0)
const [y,setY]= useState(0)
const[display,setDisplay]= useState(true)

const logMousePosition = e =>{
    console.log("Mouse Event")
    setX(e.clientX)
    setY(e.clientY)
}

useEffect(()=>{
    console.log("useEffect called")
    window.addEventListener('mousemove',logMousePosition)

    // cleanup code 
    return() =>{
        console.log('Component unmounting code')
        window.removeEventListener('mousemove', logMousePosition)
    }
},[])
  return (
    <div>
      <button onClick={()=> setDisplay(!display)}>Toggle Button</button>
      {display && <HookCounterThree/>}
      
    </div>
  )
}

export default HookCounterFour
// Run effect only once 
import React, { useState,useEffect } from 'react'

function HookCounterThree() {
const [x,setX]= useState(0)
const [y,setY]= useState(0)

const logMousePosition = e =>{
    console.log("Mouse Event")
    setX(e.clientX)
    setY(e.clientY)
}

useEffect(()=>{
    console.log("useEffect called")
    window.addEventListener('mousemove',logMousePosition)
},[])
  return (
    <div>
      X-{x}  Y-{y}
    </div>
  )
}

export default HookCounterThree

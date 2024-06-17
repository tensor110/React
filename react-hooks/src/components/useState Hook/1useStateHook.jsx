import React, { useState } from 'react'

function HookCounter() {
    const [click,setClick]= useState(0)
  return (
    <div>
      <button onClick={()=>setClick(click+1)}>Count {click}</button>
    </div>
  )
}

export default HookCounter
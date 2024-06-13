import React, { useState } from 'react'

function HookCounterFour() {
    const [items,setItems]= useState([])
    // Add values between 1 to 10
    const addItem = () =>{
        setItems([...items,{
            value: Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {
            items.map(item=>(
                <li key={item.index}>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default HookCounterFour
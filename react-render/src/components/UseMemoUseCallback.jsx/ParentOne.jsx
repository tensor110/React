import React, { useState } from 'react'
import { MemoizedChild } from './Child'

export const ParentOne = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  }

  const handleClick = () => {}

  console.log('ParentOne Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {/* <MemoizedChild name={name} person={person} /> */}
      <MemoizedChild name={name} handleClick={handleClick} />
        {/* Every time button is clicked Child component will re-render due to declaration of object and function in the parent componene  */}
        {/* To overcome the problem we use useMEmo and useCallback hook */}
        {/* Refer to ParentTwo Component */}
    </div>
  )
}
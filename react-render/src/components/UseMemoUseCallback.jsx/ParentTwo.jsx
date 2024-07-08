import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChild } from './Child'

export const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

  console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {/* <MemoizedChild name={name} person={memoizedPerson} /> */}
      <MemoizedChild name={name} handleClick={memoizedHandleClick} />
    </div>
  )
}
import React, { useState } from 'react'
import { ChildOne } from './ChildOne'

export const ParentOne = ({children}) => {
  const [count, setCount] = useState(0)

  console.log('ParentOne Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {children}   {/* In this case when the state changes only parent component will re-render  */}
    </div>
  )
}
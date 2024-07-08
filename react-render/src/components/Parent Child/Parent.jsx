import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
  const [count, setCount] = useState(0)

  console.log('Parent Render')
  return (
    // If there is any change occur in parent component child omponent will re-render 
    // 
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>   {/* Parent + Child - Re-render */}
      <button onClick={() => setCount(0)}>Count to 0</button>  {/* No Re-render in initial state after that Parent + Child - Re-render */}
      <button onClick={() => setCount(5)}>Count to 5</button>   {/* Parent + Child - Re-render on click if the value is not 5 , if the value is 5 only parent will re-render one more time */}
      <Child />
    </div>
  )
}
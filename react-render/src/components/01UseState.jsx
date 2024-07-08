import React, { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)

  console.log('UseState Render')
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>    {/* On click of this button react page will re-render once */}
      <button onClick={() => setCount(0)}>Count to 0</button>   {/* If the count is in initial state On click of this button react page will not re-render */}
      <button onClick={() => setCount(5)}>Count to 5</button>   {/*On click of this button if the count is in same then react page will re-render once but in other state page will re-render (2 times) the change the state and one more time re-render */}
    </div>
  )
}
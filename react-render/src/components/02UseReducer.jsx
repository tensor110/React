import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)

  console.log('UseReducer Render')
  return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>     {/* On click of this button react page will re-render once */}
      <button onClick={() => dispatch('decrement')}>Decrement</button>     {/* On click of this button react page will re-render once */}
      <button onClick={() => dispatch('reset')}>Reset</button>    {/* On click of this button react page will re-render once */}
    </div>
  )
}
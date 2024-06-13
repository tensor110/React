//                      Main.js
//     ____________________|___________________
//    |                    |                   |
// Component A        Component B          Component C
//                         |                   |
//                     Component D         Component E
//                                             |
//                                         Component F

import React, {useReducer} from 'react'
import ComponentA from "../useReducer Hook/useReducerWithuseContext/ComponentA"
import ComponentB from "../useReducer Hook/useReducerWithuseContext/ComponentB"
import ComponentC from "../useReducer Hook/useReducerWithuseContext/ComponentC"

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
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

function CounterFour() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div>
      Count- {count}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
    </CountContext.Provider>
  )
}
export default CounterFour
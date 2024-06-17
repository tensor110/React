import React from 'react'
import CounterOne from './components/useReducer Hook/1useReducer(SimpleState&Action)'
import CounterTwo from './components/useReducer Hook/2useReducer(ComplexState&Action)'
import CounterThree from './components/useReducer Hook/3MultipleUseReducers'
import CounterFour from './components/useReducer Hook/4useReducerWithuseContext'
import DataFetchingOne from './components/useReducer Hook/5FetchingDataWithuseReducer'

function UseReducerHook() {
  return (
    <div>
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      <DataFetchingOne />
    </div>
  )
}
export default UseReducerHook
import React from 'react'
import { ParentOne } from './Optimization/ParentOne'
import { ChildOne } from './Optimization/ChildOne'

function Optimization() {
  return (
    <div>
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  )
}

export default Optimization

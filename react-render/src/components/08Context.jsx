import React from 'react'
import { ContextParent } from './Context/ContextParent'
import { ChildA } from './Context/ContextChildren'

function Context() {
  return (
    <div>
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  )
}

export default Context

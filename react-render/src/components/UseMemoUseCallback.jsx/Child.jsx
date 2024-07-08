import React from 'react'

export const Child = ({ name, person }) => {
  console.log('ChildFive Render')
  return (
    <div>
      Hello {name}
    </div>
  )
}

export const MemoizedChild= React.memo(Child)
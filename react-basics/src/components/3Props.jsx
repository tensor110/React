import React from 'react'

function Props(props) {
  return (
    <div>
      <h1>Hello {props.name} is a fan of {props.heroname}</h1>
      {props.children}
    </div>
  )
}

export default Props

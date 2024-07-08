import React, { useState } from 'react'

const initState = {
  fname: 'Bruce',
  lname: 'Wayne'
}
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState)
  const changeName = () => {
    // person.fname = 'Clark'
    // person.lname = 'Kent'
    // setPerson(person)
    // In this method react page will not render 

    const newPerson = {...person}  // First we have to make a copy
    newPerson.fname = 'Clark'
    setPerson(newPerson)
  }
  console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
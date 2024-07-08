import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']
export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState)
  const handleClick = () => {
    // persons.push('Clark')
    // persons.push('Kent')
    // setPerson(persons)
    // In this method react page will not render 

    const newPersons = [...persons]    // First we have to make a copy
    newPersons.push('Clark')
    newPersons.push('Kent')
    setPersons(newPersons)
  }
  console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map(person => (
        <div key={person}>{person}</div>
      ))}
    </div>
  )
}
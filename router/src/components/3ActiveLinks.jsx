import React from 'react'
import { NavLink } from 'react-router-dom'
// In case of NavLink we can use Link but it will not give specific event on active route 

function ActiveLinks() {
  return (
    <nav>
        {/* NavLink add a class 'active' to the current route  */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
    </nav>
  )
}
export default ActiveLinks
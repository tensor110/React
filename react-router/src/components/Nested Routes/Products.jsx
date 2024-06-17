import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Products() {
  return (
    <>
    <div>
      <input type="search" name="" id="" placeholder='Search products' />
    </div>
    <nav>
      {/* Relative Links  */}
      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
    </nav>
    <Outlet />
    </>
  )
}

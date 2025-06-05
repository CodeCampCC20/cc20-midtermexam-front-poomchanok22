import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  const menus = [
    {id: 1, menu: "Home", path:"/todopage"},
    {id: 2, menu: "Register", path:"/register"},
    {id: 3, menu: "Login", path:"/"}
  ]
  return (
   <nav className='h-13 bg-gray-700 text-white flex items-center px-10 gap-6'>
    {menus.map( item => (
      <NavLink key={item.id} to={item.path}>{item.menu}</NavLink>
    ))}
   </nav>
  )
}

export default Navbar

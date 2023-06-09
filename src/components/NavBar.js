import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to='/'></NavLink>
            <NavLink/>
        </nav>
    </div>
  )
}

export default NavBar
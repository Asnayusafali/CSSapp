import React from 'react'
import {NavLink} from 'react-router-dom'
import './style/style.css'

function Navbar() {
  return (
      <div className='nav-bar'>
          <div className='navlink>'>

<h1>Moderna Boutique</h1>
<NavLink activeClassName="active" className="link" to="/">Home</NavLink>
<NavLink activeClassName="active"  className="link" to="/about">About</NavLink>
<NavLink activeClassName="active" className="link" to="/contact">Contact</NavLink>
</div>
  </div>
  )
  
}

export default Navbar
import React, {useState} from 'react'
import 'boxicons'
import { NavLink } from 'react-router-dom'

function Menu({hidden, toggleMenu}) {

  return (
    <div className="nav-menu" id={hidden ? "hidden" : null}>
      <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
      <NavLink to="/pokedex" onClick={toggleMenu}>Pokedex</NavLink>
      <NavLink to="/compare" onClick={toggleMenu}>Compare</NavLink>
      <NavLink to="/teams" onClick={toggleMenu}>Teams</NavLink>
    </div>
  )
}

export default Menu
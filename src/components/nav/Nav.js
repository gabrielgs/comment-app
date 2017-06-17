import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
  return(
    <ul className="side-nav fixed">
      <li>
        <NavLink to='/'>INICIO</NavLink>
      </li>
      <li>
        <NavLink to='/estadisticas'>Estadisticas</NavLink>
      </li>
    </ul>
  )
}

export default Nav
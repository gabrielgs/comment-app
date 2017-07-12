import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav () {
  return(
    <header>
      <ul className="side-nav fixed">
        <li>
          <Link className="item" to='/'>INICIO</Link>
        </li>
        <li>
          <Link className="item" to='/estadisticas'>Estadisticas</Link>
        </li>
      </ul>
    </header>
  )
}

export default Nav
import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Produktai</Link>
        <Link to="/partners">Partneriai</Link>
      </nav>
  )
}

export default Navbar
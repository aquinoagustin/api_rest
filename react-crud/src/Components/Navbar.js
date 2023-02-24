import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand">
  <h3>Informatica DOS</h3>
  </Link>
    <Link to='/computerForm' className="navbar-brand">Upload product</Link>

  </div>
</nav>
  )
}

export default Navbar;
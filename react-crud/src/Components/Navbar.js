import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand">
    <div className='logo'>
      <img src="./descarga.png" className='obrasoci' alt="Obrasoci"/>
      <h3>Informatica DOS</h3>
    </div>
  </Link>
    <Link to='/computerForm' className="navbar-brand">Upload product</Link>

  </div>
</nav>
  )
}

export default Navbar;
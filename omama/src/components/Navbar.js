import React from 'react';
import Logo from '../media/omama-Logo.png'

function Navbar() {
  return (
    <div className="navbar navbar-center">
      <a className="navbar-brand" href="index.html">
         <img src={Logo} alt="Logo" />
      </a>
      <ul className="navbar-menu navbar-center">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/about">About</a></li>
        <li className="navbar-item"><a href="/services">Services</a></li>
        <li className="navbar-item"><a href="/portfolio">Contact</a></li>
        <li className="navbar-item"><a href="/contact">Careers</a></li>
      </ul>
    </div>
  );
}

export default Navbar;

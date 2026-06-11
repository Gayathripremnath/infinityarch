import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Path to your Infinity logo

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-wrapper">
        <img src={logo} alt="INFINITY Logo" className="navbar-logo" />
      </div>
      
      {/* Floating capsule with 4 rounded corners */}
      <div className="navbar-menu-wrapper">
        <ul className="navbar-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about" className="active">About us</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      <button className="btn-get-started">
        Get started <span className="arrow-circle">➔</span>
      </button>
    </nav>
  );
};

export default Navbar;
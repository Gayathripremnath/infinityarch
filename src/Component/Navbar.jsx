import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  // State to track if mobile hamburger menu is opened or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo-wrapper">
        <img src={logo} alt="INFINITY Logo" className="navbar-logo" />
      </div>
      
      {/* Floating capsule with conditional active class for mobile views */}
      <div className={`navbar-menu-wrapper ${isMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="navbar-links">
          <li><a href="/" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="" className="active" onClick={() => setIsMenuOpen(false)}>About us</a></li>
          <li><a href="" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
          <li><a href="" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
      
      <div className="navbar-right-actions">
        <button className="btn-get-started">
          Get started <span className="arrow-circle">➔</span>
        </button>

        {/* Hamburger Icon seen only on smaller breakpoints */}
        <button 
          className={`hamburger-toggle ${isMenuOpen ? 'toggle-active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
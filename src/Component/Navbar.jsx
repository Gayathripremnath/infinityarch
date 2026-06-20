import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/Logoinfinity.png'; // Assuming you have a logo image in the assets folder

const Navbar = () => {
  // Controlled state for opening/closing the sidebar drawer
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Header Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-container">
            <img src={logo} alt="infinity STUDIO" className="logo-img" />
          </div>
          
          {/* Toggle button with conditional 'active' class */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="menu-icon"></span>
            <span className="menu-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>

        {/* Center Links (Visible on desktop screen sizes) */}
        <div className="nav-center">
          <ul className="nav-links">
            <li><a href="#homes">Home </a></li>
            <li><a href="#pages">About </a></li>
            <li><a href="#portfolio">Services </a></li>
            <li><a href="#blogs">Contact</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <a href="tel:+9100000000" className="nav-phone">+9100000000</a>
        </div>
      </nav>

      {/* Dimmed Background Overlay Mask */}
      <div 
        className={`drawer-overlay ${isMenuOpen ? 'visible' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Premium White Left Side-Drawer Panel (Matches image_94bd42.png) */}
      <div className={`side-drawer ${isMenuOpen ? 'open' : ''}`}>
        
        {/* Drawer Brand Header */}
        <div className="drawer-header">
          <div className="drawer-logo">
            <img src={logo} alt="infinity" className="drawer-logo-img" />
          </div>
          <button
            className="drawer-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Sidebar Navigation Options */}
        <ul className="drawer-links">
          <li><a href="#homes" onClick={() => setIsMenuOpen(false)}>HOME </a></li>
          <li><a href="#pages" onClick={() => setIsMenuOpen(false)}>ABOUT </a></li>
          <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>SERVICES </a></li>
          <li><a href="#blogs" onClick={() => setIsMenuOpen(false)}>CONTACT </a></li>
        </ul>

        {/* Drawer Footer Stack (Contacts & Social Media Handles) */}
        <div className="drawer-footer">
          <div className="drawer-contact">
            <a href="tel:+91000000000" className="drawer-phone">+910000000000</a>
            <a href="mailto:hello@infinity.com" className="drawer-email">info@infinityarchitecture.com</a>
          </div>
          
          <div className="drawer-socials">
            <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter" aria-label="X"><i className="fab fa-x-twitter"></i></a>
            <a href="#pinterest" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
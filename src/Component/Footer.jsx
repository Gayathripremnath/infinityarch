import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-top">
        <div className="footer-brand-side">
            <h2 className="footer-title">INFINITY</h2>
          <p>Building beyond conventional boundaries. Creating spatial artistry across the modern globe.</p>
        </div>
        <div className="footer-links-side">
          <div className="link-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Contact</h4>
            <ul>
              <li>info@infinity.com</li>
              <li>+1 (555) 019-2834</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Genova Technologies. All rights reserved.</p>
        <div className="footer-socials">
         <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
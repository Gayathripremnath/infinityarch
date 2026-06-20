import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Assuming you have a logo image in the assets folder
const Footer = () => {
  return (
      <footer className="global-footer-canvas">
        <div className="footer-action-call-row">
          <h2>Let's work <i>together</i></h2>
          <div className="footer-action-cta-links">
            <a href="#touch" className="footer-pill-btn accent">Get In Touch</a>
            <a href="#careers" className="footer-pill-btn">Careers</a>
          </div>
        </div>

        <div className="footer-structural-layout">
          <div className="footer-brand-summary-box">
            <div className="nav-logo inverse">
              <img src={logo} alt="infinity" className="logo-img" />
            </div>
            <p>Compact Living Redefined: Smart and Stylish Portable House Layout Ideas.</p>
            <div className="footer-social-links-row">
              <a href="#f">f</a><a href="#x">𝕏</a><a href="#p">p</a><a href="#i">in</a>
            </div>
          </div>

          <div className="footer-links-column-nav">
            <h5>Top Links</h5>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
            <a href="#partners">Partners</a>
          </div>

          <div className="footer-links-column-nav">
            <h5>Resource</h5>
            <a href="#news">News</a>
            <a href="#posts">Posts</a>
          </div>

          <div className="footer-links-column-nav">
            <h5>Phone</h5>
            <span className="static-text-val">(025)555-36-18</span>
          </div>

          <div className="footer-links-column-nav">
            <h5>Address</h5>
            <span className="static-text-val">220 East Peterson D Charm NC 30217</span>
          </div>

          <div className="footer-embedded-wireframe-graphics">
            <div className="get-in-touch-label-overlay">
              <span>(Let's contact for better result)</span>
              <h3>Get In Touch</h3>
              <a href="mailto:info@infinityarchitecture.com">info@infinityarchitecture.com</a>
            </div>
            <div className="blueprint-isometric-wire-box">
              {/* Perspective layout overlay placeholder mimicking wireframe drawing asset */}
              <div className="isometric-mesh-line"></div>
            </div>
          </div>
        </div>

        <div className="footer-copyright-bottom-strip">
          <p>©2026 Genova technologies All rights reserved</p>
        </div>
      </footer>
  );
};

export default Footer;
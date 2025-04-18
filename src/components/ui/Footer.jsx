import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark-2">
      <div className="footer-wrapper">
        <div className="footer-column">
          <h3>School Name</h3>
       <div> <img src="df" alt="logo" /> </div>
  
        </div>

        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><Link to="/about">Mission</Link></li>
            <li><Link to="/about">Vision</Link></li>
            <li><Link to="/about">Association</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Facilities</h4>
          <ul>
            <li><Link to="/facilities">Laboratory</Link></li>
            <li><Link to="/facilities">Classroom</Link></li>
            <li><Link to="/facilities">Library</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">What is School</Link></li>
            <li><Link to="/">Why Join Our Team</Link></li>
            <li><Link to="/contact"></Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            123 Future Street,<br />
            Education City, 456789<br />
            India
          </p>
          <p>Email: info@schoolname.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
       
      </div>

      <div className="footer-bottom-text">
        <p>&copy; 2025 School Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

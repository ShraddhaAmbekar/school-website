import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4 ">
            <h3 >Atal Utkrisht Pt. Mahimanand Nautiyal GIC Jibya Kotdhar, Uttarkashi</h3>
            <img src="df" alt="logo" className="img-fluid mt-3" />
          </div>

          <div className="col-md-2 mb-4">
            <h4>About Us</h4>
            <ul>
              <li><Link to="/about">Mission</Link></li>
              <li><Link to="/about">Vision</Link></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h4>Facilities</h4>
            <ul>
              <li><Link to="/facilities">Laboratory</Link></li>
              <li><Link to="/facilities">Classroom</Link></li>
              <li><Link to="/facilities">Library</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <p>Atal Utkrisht Late Mahimanand Nautiyal GIC Jibya Kotdhar, Chinyalisaur, Uttarkashi</p>
            <p>Pin code - 249152</p>
            <p>Email: info@schoolname.com</p>
            <p>Phone: +91 9761436675  /  +91 9259516141</p>
          </div>

        </div>

        <div className="footer-bottom-text">
          <p>&copy; 2025 Atal Utkrisht. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

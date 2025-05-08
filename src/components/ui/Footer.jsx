import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">

          <div className="column col-md-3 mb-4 ">
            <h3 >Atal Utkrisht Pt. Mahimanand Nautiyal GIC Jibya Kotdhar, Uttarkashi</h3>
            {/* <img src="df" alt="logo" className="img-fluid mt-3" /> */}
          </div>

          <div className="column col-md mb-4">
            <h4>About Us</h4>
            <ul>
              <li><Link to="/about">Mission</Link></li>
              <li><Link to="/about">Vision</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="column col-md mb-4">
            <h4>Facilities</h4>
            <ul>
              <li><Link to="/facilities">Laboratory</Link></li>
              <li><Link to="/facilities">Classroom</Link></li>
              <li><Link to="/facilities">Library</Link></li>
            </ul>
          </div>

          <div className="column col-md-3 mb-4">
            <h4>Affliation and Credentials</h4>
            <ul>
            <li><Link to="/affliation">Result and Academics</Link></li>
            <li><Link to="/affliation">Important documents and Certificates</Link></li>
            <li><Link to="/affliation"> Mandatory Disclosure Details</Link></li>
            
              
            </ul>
          </div>

          <div className="column col-md-3 mb-4">
            <h4>Contact Us</h4>
            <p>Atal Utkrisht Late Mahimanand Nautiyal GIC Jibya Kotdhar, Chinyalisaur, Uttarkashi</p>
            <p>Pin code - 249152</p>
            <p>Email: info@schoolname.com</p>
            <p>Phone: +91 9761436675  /  +91 9259516141</p>
          </div>

        </div>

        <div className="footer-bottom-text">
          <p className='text-center'>&copy; 2025 Atal Utkrisht GIC Jibya Kotdhar,Uttarkashi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

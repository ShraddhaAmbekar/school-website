// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // custom styles

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <img src="/logo.png" alt="Logo" className="logo" />

          <button className="menu-btn" onClick={toggleMenu}>
            ☰  <span className="close-btn">MENU</span> 
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>✕ CLOSE</button>


  <ul className="overlay-links">
 
  <li className="has-submenu">
  <Link to="/" onClick={closeMenu}><span>Home</span> </Link>
    <ul className="submenu">
     
    </ul>
  </li>
  <li className="has-submenu">
  <Link to="/about" onClick={toggleMenu}><span>About</span> </Link>
    <ul className="submenu">
      <li><Link to="/about" className="sublinks" onClick={closeMenu}> &#x27A2; Mission</Link></li>
      <li><Link to="/about" className="sublinks" onClick={closeMenu}> &#x27A2;Vision</Link></li>
    </ul></li>
 

  

  <li><Link to="" onClick={closeMenu}><span>Contact-us</span> </Link></li>
  <li className="has-submenu">
  <Link to="/about" onClick={closeMenu}><span>Facilities </span></Link>
    <ul className="submenu">
      <li><Link to="/facilities" className="sublinks" onClick={closeMenu}>	&#x27A2; Library</Link></li>
      <li><Link to="/facilities" className="sublinks" onClick={closeMenu}>	&#x27A2; Laboratory</Link></li>
      <li><Link to="/facilities" className="sublinks" onClick={closeMenu}>	&#x27A2; classroom</Link></li>
    </ul></li>
  <li><Link to="/gallery" onClick={closeMenu}><span>Gallery</span> </Link></li>
</ul>


        <div className="social-icons">
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </>
  );
};

export default Header;

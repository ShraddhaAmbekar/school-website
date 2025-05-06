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
          {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
<p className='logo'>Atal Utkrisht</p>
          <button className="menu-btn" onClick={toggleMenu}>
            ☰  <span className="close-btn">MENU</span> 
          </button>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-btn" onClick={closeMenu}>✕<span className='close-btn'>CLOSE</span> </button>


  <ul className="overlay-links">
 
  <li className="has-submenu">
  <Link to="/" onClick={closeMenu}><span>Home</span> </Link>
    <ul className="submenu">
     
    </ul>
  </li>
  <li className="has-submenu">
  <Link><span>About</span> </Link>
    <ul className="submenu">
      <li><Link to="/about" className="sublinks" onClick={closeMenu}> &#x27A2; Mission</Link></li>
      <li><Link to="/about" className="sublinks" onClick={closeMenu}> &#x27A2;Vision</Link></li>
    </ul></li>
 

  <li><Link to="contact" onClick={closeMenu}><span>Contact-us</span> </Link></li>
  <li className="has-submenu">
  <Link ><span>Facilities </span></Link>
    <ul className="submenu">
      <li><Link to="/facilities" className="sublinks" onClick={closeMenu}>	&#x27A2; Library</Link></li>
      <li><Link to="/facilities" className="sublinks" onClick={closeMenu}>	&#x27A2; Laboratory</Link></li>
      <li><Link to="/facilities" className="sublinks" onClick={closeMenu}>	&#x27A2; classroom</Link></li>
    </ul></li>
  <li><Link to="/gallery" onClick={closeMenu}><span>Gallery</span> </Link></li>

  <li className="has-submenu">
  <Link><span>Affliations and Credentials</span> </Link>
    <ul className="submenu">
      <li><Link to="/affliation" className="sublinks" onClick={closeMenu}> &#x27A2; Result and Academics</Link></li>
      <li><Link to="/affliation" className="sublinks" onClick={closeMenu}> &#x27A2;Important certificates and documents</Link></li>
    </ul></li>
</ul>



 
      </div>
    </>
  );
};

export default Header;

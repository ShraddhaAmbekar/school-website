import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef(null);

  const handleNavLinkClick = () => {
    const collapseElement = navRef.current;
    if (collapseElement && collapseElement.classList.contains('show')) {
      collapseElement.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
          School Name
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={navRef}>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown">
                Home
              </Link>
              <ul className="dropdown-menu">
             
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown">
                About
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/about" onClick={handleNavLinkClick}>Mission</Link></li>
                <li><Link className="dropdown-item" to="/about" onClick={handleNavLinkClick}>Vision</Link></li>
                <li><Link className="dropdown-item" to="/about" onClick={handleNavLinkClick}>Association</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>Contact Us</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/facilities" role="button" data-bs-toggle="dropdown">
                Facilities
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/facilities" onClick={handleNavLinkClick}>Laboratory</Link></li>
                <li><Link className="dropdown-item" to="/facilities" onClick={handleNavLinkClick}>Classroom</Link></li>
                <li><Link className="dropdown-item" to="/facilities" onClick={handleNavLinkClick}>Library</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={handleNavLinkClick}>Gallery</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

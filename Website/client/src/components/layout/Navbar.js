import React, { useState, useEffect } from "react";
import { Button } from "../pages/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Hydroponics Guider
            {/* <i class='fab fa-typo3' /> */}
            <i class="fas fa-leaf"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/Landing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                to='/register'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/Dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Settings"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Recipes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SensorData"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sensor Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

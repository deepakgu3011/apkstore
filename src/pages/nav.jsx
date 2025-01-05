import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages-style/nav.css";

const Navs = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  
  // Use navigate for redirecting after logout
  const navigate = useNavigate();

  // Handle Logout action
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false); // Update state after logout
    navigate('/'); // Redirect to login page
    window.location.reload();
  };

  return (
    <div className="navs" id="navigation">
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Brand */}
          <Link
            className="navbar-brand"
            id="brand"
            style={{ backgroundImage: 'url(/logo192.png)' }}
            to="/"
            onClick={isLoggedIn}
          >
            ApkStore
          </Link>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="links">
              <li className="nav-item">
                {isLoggedIn ? 
                (<Link className="nav-link active text-light" to="/profile">Dashboard</Link>):
                (<Link className="nav-link active text-light" to="/">Home</Link>)}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contact" tabIndex="-1">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/privacypolicy"
                  tabIndex="-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link className="nav-link text-light" to="#" onClick={handleLogout}>
                    Logout
                  </Link>
                ) : (
                  <Link to="/login" className="nav-link text-light">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navs;

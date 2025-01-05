import React from "react";
import { Link } from "react-router-dom";
import "../pages-style/footer.css";
const Footer = () => {
    return (
      <footer className="footer bg-dark text-light">
        <div className="container">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-md-4">
              <h5 className="footer-brand">APKStore</h5>
              <p>Your one-stop platform for downloading APKs securely and quickly.</p>
            </div>
  
            {/* Quick Links */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><Link className="text-light" to="/"onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                <li><Link className="text-light" to="/about"onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
                <li><Link className="text-light" to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
                <li><Link className="text-light" to="/privacypolicy" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
                <li><a href="#" className="text-light"></a></li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="footer-social">
                <li><a href="#" className="text-light"><i className="fab fa-facebook"></i> Facebook</a></li>
                <li><a href="#" className="text-light"><i className="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#" className="text-light"><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="#" className="text-light"><i className="fab fa-youtube"></i> YouTube</a></li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="footer-bottom text-center mt-4">
            <p>© 2024 APKStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
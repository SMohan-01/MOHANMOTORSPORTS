import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-column">
          <h2 className="footer-title">Mohan Motorsports</h2>
          <p className="footer-location">Chennai, Tamil Nadu, India</p>
          <p className="footer-contact">📞 123456789</p>
          <p className="footer-email">✉️ mohanmotorsports@gmail.com</p>

          
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>

        {/* Second Column - Business Hours */}
        <div className="footer-column">
          <h3 className="footer-title">Business Hours</h3>
          <p>Monday - Friday: 10 AM - 7 PM</p>
          <p>Saturday: 10 AM - 5 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

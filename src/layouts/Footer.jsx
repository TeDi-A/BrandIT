import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-element container">
      <div className="footer-text">
        <p>&copy; {new Date().getFullYear()} BrandIt. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <p>
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
        <p>
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

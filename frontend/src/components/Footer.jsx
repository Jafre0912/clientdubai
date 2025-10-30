import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import the new CSS file

// --- SVG Icons ---
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="footer-icon"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.836l-.74-4.435a1 1 0 01.54-1.06l1.548-.773a11.037 11.037 0 00-6.105-6.105l-.774 1.548a1 1 0 01-1.06.54l-4.435-.74A1 1 0 013 3H2z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="footer-icon"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="footer-icon align-start"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Footer Component ---
const Footer = () => {
  return (
    <>
      <footer id="main-footer">
        <div className="footer-content-container">
          {/* Column 1: Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Info:</h3>
            <p className="footer-subheading">
              Digital India Oxigen Private Limited
            </p>
            <div className="footer-link-flex align-start">
              <MapPinIcon />
              <p>
                1137, R.G. Towers, Above arrow Showroom, Bangalore-560038,
                Karnataka, India
              </p>
            </div>
            <div className="footer-link-flex">
              <MailIcon />
              <span>info@digitalindiacsp.in</span>
            </div>
            <div className="footer-link-flex">
              <PhoneIcon />
              <span>+91-8972476389</span>
            </div>
            <a href="/contact" className="footer-link-apply">
              Apply Online for CSP
            </a>
            <p className="footer-small-text">
              CSP Registration 2024 | CSP Online Registartion
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-link-list">
              <li>
                <Link to="/services/banking" className="footer-link">
                  Banking
                </Link>
              </li>
              <li>
                <Link to="/services/kiosk" className="footer-link">
                  Csp Kiosk
                </Link>
              </li>
              <li>
                <Link to="/services/money-transfer" className="footer-link">
                  Money Transfer
                </Link>
              </li>
              <li>
                <Link to="/services/utility-payments" className="footer-link">
                  Utility Payments
                </Link>
              </li>
              <li>
                <Link to="/services/micro-finance" className="footer-link">
                  Micro Finance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Copyright Bar */}
      <div className="copyright-bar">© 2025 Digital India.</div>
    </>
  );
};

export default Footer;

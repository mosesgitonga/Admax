import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const NavBar = ({ menuOpen }) => {

  const phoneNumber = "+254711279189"; 
  const message = "Hello, I would like to know more about your services."; 

  const openWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
      <Link id="link" to="/">Home</Link>
      <Link id="link" to="/services">Services</Link>
      <Link id="link" to="/gallery">Gallery</Link>
      <Link id="link" to="/about-us">About Us</Link>
      <a
        href="#"
        onClick={openWhatsApp}
        className="link"
        aria-label="Open WhatsApp"
      >
        <FontAwesomeIcon 
          icon={faWhatsapp} 
          size="3x" 
          style={{ color: '#25D366', boxShadow: 'blue 0px 5px 10px', borderRadius: '50%' }} 
        />
      </a>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import RippleButton from "./deviceFixButton";


const NavBar = ({ menuOpen }) => {
  const phoneNumber = "+254711279189"; 
  const message = "Hello, I would like to know more about your services."; 

  const openWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
      <a id="link" href="#">Home</a>
      <a id="link" href="#services">Services</a>
      <a id="link" href="#catalog">Catalog</a>
      <a id="link" href="#about-us">About Us</a>
      <RippleButton className="rippleBtn" />

    </nav>
  );
};

export default NavBar;
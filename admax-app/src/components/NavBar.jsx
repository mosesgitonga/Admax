import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ menuOpen }) => {
  return (
    <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
      <Link id="link" to="/">Home</Link>
      <Link id="link" to="/services">Services</Link>
      <Link id="link" to="/gallery">Gallery</Link>
      <Link id="link" to="/about-us">About Us</Link>
      <Link id="link" to="/contact-us">Contact Us</Link>
    </nav>
  );
};

export default NavBar;

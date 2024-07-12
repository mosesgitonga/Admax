import React from "react";
import './NavBar.css';

const NavBar = ({ menuOpen }) => {
  return (
    <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
      <div>Home</div>
      <div>Services</div>
      <div>Gallery</div>
      <div>About Us</div>
      <div>Contact Us</div>
    </nav>
  );
};

export default NavBar;

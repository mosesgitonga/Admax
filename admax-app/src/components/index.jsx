import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Index.css'; 

const Header = () => {

  const phoneNumber = "+254711279189"; 
  const message = "Hello, I would like to know more about your services."; 

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="bar">
        <h1>Admax Tech Solutions</h1>
      </div>
      <nav className={`top-nav ${menuOpen ? 'open' : ''}`}>
        <div>Home</div>
        <div>Services</div>
        <div>Our Gallery</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <a
          href="#"
          onClick={openWhatsApp}
          className="whatsappLink"
          aria-label="Open WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
        </a>
      </nav>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </header>
  );
};

export default Header;

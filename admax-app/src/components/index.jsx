import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import NavBar from './NavBar';
import WhatsAppLink from "./WhatsAppLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
    <header className="header">
      <div className="bar">
        <h1>Admax Tech Solutions</h1>
      </div>
      <NavBar menuOpen={menuOpen} />
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </header>
    </div>
  );
};

export default Header;

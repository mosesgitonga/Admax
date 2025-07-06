import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
            Admax Tech Solutions
        </h1>
        <nav 
          className="header-nav"
          aria-label="Main navigation"
        >
          <a 
            href="#" 
            className="header-link"
            aria-current="page"
          >
            Home
          </a>
          <a 
            href="#cart" 
            className="header-link"
          >
            Products
          </a>
          <a 
            href="#account" 
            className="header-link"
          >
            About Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';
import SearchBar from './SearchBar';
import './styles/Header.css';

function Header({ onSearch, onMenuToggle, isMenuOpen }) {
  return (
    <header className="header">
      <div className="header-container">
        <button
          className="hamburger-button"
          onClick={onMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <i className="fas fa-bars"></i>
        </button>
        <h1 className="header-title">Admax Tech Solutions</h1>
        <SearchBar onSearch={onSearch} />
        <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`} aria-label="Main navigation">
          <a href="/" className="header-link" aria-current="page">
            <i className="fas fa-home"></i> Home
          </a>
          <a href="/products" className="header-link">
            <i className="fas fa-box"></i> Products
          </a>
          <a href="/about" className="header-link">
            <i className="fas fa-info-circle"></i> About Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
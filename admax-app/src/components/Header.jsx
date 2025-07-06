import React from 'react';
import SearchBar from './SearchBar';
import './styles/Header.css';

function Header({ onSearch }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Admax Tech Solutions</h1>
        <SearchBar onSearch={onSearch} />
        <nav className="header-nav" aria-label="Main navigation">
          <a href="/" className="header-link" aria-current="page">Home</a>
          <a href="/products" className="header-link">Products</a>
          <a href="/about" className="header-link">About Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
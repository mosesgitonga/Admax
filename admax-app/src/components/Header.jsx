import React, { useState } from 'react';
import CategoryList from './CategoryList';
import SearchBar from './SearchBar';
import './styles/Header.css';

function Header({ onCategorySelect, selectedCategory, onSearch, searchQuery }) {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <h1 className="logo">Admax Tech Solutions</h1>
          <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
          <nav className="nav-menu" aria-label="Main navigation">
            <button
              className="hamburger-menu"
              onClick={toggleCategoryMenu}
              aria-label={isCategoryMenuOpen ? 'Close category menu' : 'Open category menu'}
              aria-expanded={isCategoryMenuOpen}
            >
              <i className={`fas ${isCategoryMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <ul className="nav-list">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className={`category-wrapper ${isCategoryMenuOpen ? 'category-wrapper--open' : ''}`}>
          <CategoryList onCategorySelect={onCategorySelect} selectedCategory={selectedCategory} />
        </div>
      </div>
    </header>
  );
}

export default Header;
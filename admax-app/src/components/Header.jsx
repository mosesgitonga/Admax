import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import "./styles/Header.css";

function Header({ onCategorySelect, selectedCategories, onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top-row">
          <div className="header-left">
            <h1 className="logo">Admax Tech Solutions</h1>

            <nav className="nav-menu desktop-nav">
              <ul className="nav-list">
                <li><a href="#" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="search-bar-wrapper">
            <SearchBar onSearch={onSearch} />
          </div>

          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav-container">
            <nav className="nav-menu mobile-nav">
              <ul className="nav-list vertical">
                <li><a href="#" className="nav-link" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={toggleMenu}>About</a></li>
                <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a></li>
              </ul>
            </nav>
          </div>
        )}

        <div className="category-wrapper">
          <CategoryList
            onCategorySelect={onCategorySelect}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

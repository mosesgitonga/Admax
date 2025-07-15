import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import CategoryList from "./CategoryList";
import SearchBar from "./SearchBar";
import "./styles/Header.css";

function Header({ onCategorySelect, selectedCategory, onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-container">
        {/* Top Row: Logo, Nav, Hamburger */}
        <div className="top-bar">
          <h1 className="logo">Admax Tech Solutions</h1>

          {/* Desktop nav */}
          <nav className="nav-menu desktop-nav">
            <ul className="nav-list">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          {/* Hamburger for small screens */}
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile nav below toggle */}
        {isMenuOpen && (
          <nav className="nav-menu mobile-nav">
            <ul className="nav-list vertical">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
        )}

        {/* Search Bar below nav */}
        <div className="search-bar-wrapper">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Category list */}
        <div className="category-wrapper">
          <CategoryList
            onCategorySelect={onCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import './styles/SearchBar.css';

function SearchBar({ onSearch }) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <div className="search-form">
          <input
            type="text"
            placeholder="Search for cutting-edge tech..."
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
            aria-label="Search products"
          />
          <button 
            className="search-button"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
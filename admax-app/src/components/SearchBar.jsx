import React from 'react';
import './styles/SearchBar.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-container">
      <div className="search-form">
        <div className="input-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for cutting-edge tech..."
            onChange={(e) => onSearch(e.target.value)}
            className="search-input"
            aria-label="Search products"
          />
        </div>
        <button 
          className="search-button"
          aria-label="Search"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default React.memo(SearchBar);

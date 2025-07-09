import React, { useState } from 'react';
import './styles/CategoryList.css';

function CategoryList({ onCategorySelect, selectedCategory }) {
  const categories = [
    'New Deals',
    'Refurbished Deals',
    'Laptops',
    'Desktops',
    'Accessories',
    'Printers & Scanners',
    'Networking',
    'Apple Products',
    'Gaming',
    'Power & Protection',
    'Workstations & Servers',
    'POS Systems',
    'Drives & Storage',
    'Utilities, Anti-virus, Security',
    'Service & Repair',
  ];

  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
    if (showAllCategories) {
      onCategorySelect(null);
    }
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category === 'New Deals' ? null : category);
  };

  return (
    <section className="category-section" aria-labelledby="category-heading">
      <nav className={`category-nav ${showAllCategories ? 'category-nav--expanded' : ''}`} aria-label="Category navigation">
        <div className="category-container">
          <div className="category-list">
            {categories.slice(0, showAllCategories ? categories.length : 6).map((category) => (
              <button
                key={category}
                className={`category-item ${selectedCategory === category ? 'category-item--active' : ''}`}
                onClick={() => handleCategoryClick(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
            <button
              className="category-toggle"
              onClick={toggleCategories}
              aria-expanded={showAllCategories}
              aria-label={showAllCategories ? 'Show fewer categories' : 'Show all categories'}
            >
              <i className={`fas ${showAllCategories ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              {showAllCategories ? 'Show Less' : 'More'}
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default CategoryList;
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './styles/CategoryList.css';

function CategoryList({ onCategorySelect, selectedCategories = [] }) {
  const categories = [
    'New Deals', 'Refurbished Deals', 'Laptops', 'Desktops', 'Accessories',
    'Printers & Scanners', 'Networking', 'Apple Products', 'Gaming',
    'Power & Protection', 'Workstations & Servers', 'POS Systems',
    'Drives & Storage', 'Utilities, Anti-virus, Security', 'Service & Repair'
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleCategories = () => setShowAll(prev => !prev);

  const handleCategoryClick = (category) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];

    onCategorySelect(updated);
  };

  const visibleCategories = showAll ? categories : categories.slice(0, categories.length);

  return (
    <section className="category-section">
      <nav className="category-nav">
        <div className="category-container">
          <div className="category-list">
            {visibleCategories.map((category) => (
              <button
                key={category}
                className={`category-item ${selectedCategories.includes(category) ? 'category-item--active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
            <button
              className="category-toggle"
              onClick={toggleCategories}
              aria-expanded={showAll}
            >
              {showAll ? <FiChevronUp /> : <FiChevronDown />} {showAll ? 'Show Less' : 'More'}
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default CategoryList;

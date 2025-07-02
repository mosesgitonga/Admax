import React, { useState, useEffect } from 'react';
import './styles/CategoryList.css';

function CategoryList() {
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
    'Service & Repair'
  ];

  const featuredItems = [
    {
      id: 1,
      name: 'Gaming Laptop',
      description: 'Unleash epic performance with cutting-edge GPUs.',
      image: 'https://via.placeholder.com/400x300?text=Gaming+Laptop',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Precision control for seamless productivity.',
      image: 'https://via.placeholder.com/400x300?text=Wireless+Mouse',
    },
    {
      id: 3,
      name: 'Antivirus Software',
      description: 'Protect your digital world with top-tier security.',
      image: 'https://via.placeholder.com/400x300?text=Antivirus+Software',
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!selectedCategory) {
        setCurrentItem((prev) => (prev + 1) % featuredItems.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length, selectedCategory]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 5);

  return (
    <section 
      className="category-section"
      aria-labelledby="category-heading"
    >
      <div className="category-container">
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close category menu' : 'Open category menu'}
        >
          <span className="hamburger-icon"></span>
        </button>
        <nav 
          className={`category-sidenav ${isMenuOpen ? 'category-sidenav--open' : ''}`}
          aria-label="Category navigation"
        >
          <ul 
            className="category-list"
            role="list"
          >
            {visibleCategories.map((category, index) => (
              <li 
                key={index} 
                className="category-item"
              >
                <a 
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} 
                  className={`category-link ${selectedCategory === category ? 'category-link--active' : ''}`}
                  aria-label={`Explore ${category} category`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </a>
              </li>
            ))}
            {categories.length > 5 && (
              <li className="category-item">
                <button
                  className="category-link category-link--show-more"
                  onClick={toggleCategories}
                  aria-label={showAllCategories ? 'Show fewer categories' : 'Show all categories'}
                >
                  {showAllCategories ? 'Show Fewer' : 'Show All Categories'}
                </button>
              </li>
            )}
          </ul>
        </nav>
        {!selectedCategory && (
          <div className="category-content">
            <div className="category-text">
              <h2 
                id="category-heading" 
                className="category-heading"
              >
                Explore Our Tech Universe
              </h2>
              <p className="category-description">
                Dive into a galaxy of cutting-edge technology. From high-performance laptops to robust security solutions, find the gear that powers your future.
              </p>
            </div>
            <div className="category-banner">
              <div className="banner-item">
                <img 
                  src={featuredItems[currentItem].image} 
                  alt={featuredItems[currentItem].name} 
                  className="banner-image"
                />
                <div className="banner-content">
                  <h3 className="banner-title">{featuredItems[currentItem].name}</h3>
                  <p className="banner-description">{featuredItems[currentItem].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryList;
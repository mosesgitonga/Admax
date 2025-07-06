import React, { useState, useEffect } from 'react';
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
    'Service & Repair'
  ];

  const featuredItems = [
    {
      id: 1,
      name: 'Gaming Laptop Pro',
      description: 'Experience gaming like never before with top-tier GPUs!',
      image: 'https://via.placeholder.com/1200x400?text=Gaming+Laptop+Pro',
      cta: 'Shop Now'
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Boost productivity with ergonomic precision.',
      image: 'https://via.placeholder.com/1200x400?text=Wireless+Mouse',
      cta: 'Shop Now'
    },
    {
      id: 3,
      name: 'Antivirus Software',
      description: 'Secure your digital world with advanced protection.',
      image: 'https://via.placeholder.com/1200x400?text=Antivirus+Software',
      cta: 'Shop Now'
    },
  ];

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

  const [currentItem, setCurrentItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

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
    onCategorySelect(category);
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
          <div className="category-content fullwidth">
            <div className="category-banner">
              <div className="banner-item">
                <img 
                  src={featuredItems[currentItem].image} 
                  alt={featuredItems[currentItem].name} 
                  className="banner-image"
                  loading="lazy"
                />
                <div className="banner-content">
                  <h3 className="banner-title">{featuredItems[currentItem].name}</h3>
                  <p className="banner-description">{featuredItems[currentItem].description}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm%20interested%20in%20${encodeURIComponent(featuredItems[currentItem].name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="banner-cta"
                    aria-label={`Shop ${featuredItems[currentItem].name} now via WhatsApp`}
                  >
                    {featuredItems[currentItem].cta}
                  </a>
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
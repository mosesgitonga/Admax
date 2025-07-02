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
      image: "33c589da-89ac-424e-ad3f-12c4f83d3f0c_removalai_preview.png"
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Precision control for seamless productivity.',
      image: '99cabf4a-5ac9-4e62-a2ab-15e9d4006fc7_removalai_preview.png'
    },
    {
      id: 3,
      name: 'Antivirus Software',
      description: 'Protect your digital world with top-tier security.',
      image: 'data:image/webp;base64,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',
    },
  ];

  const [currentItem, setCurrentItem] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section 
      className="category-section"
      aria-labelledby="category-heading"
    >
      <div className="category-container">
        <div className="category-header">
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
        <button
          className="hamburger-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close category menu' : 'Open category menu'}
        >
          <span className="hamburger-icon"></span>
        </button>
        <ul 
          className={`category-list ${isMenuOpen ? 'category-list--open' : ''}`}
          role="list"
        >
          {categories.map((category, index) => (
            <li 
              key={index} 
              className="category-item"
            >
              <a 
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="category-link"
                aria-label={`Explore ${category} category`}
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CategoryList;
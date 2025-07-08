import React, { useState, useEffect, useRef } from 'react';
import './styles/CategoryList.css';

function CategoryList({ onCategorySelect, selectedCategory, searchTerm }) {
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

  const featuredItems = [
    {
      id: 1,
      name: 'Gaming Laptop Pro',
      description: 'Experience gaming like never before with top-tier GPUs!',
      image: 'laptop.png',
      cta: 'Shop Now',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Boost productivity with ergonomic precision.',
      image: 'mouse.webp',
      cta: 'Shop Now',
    },
    {
      id: 3,
      name: 'Antivirus Software',
      description: 'Secure your digital world with advanced protection.',
      image: 'keyboard.webp',
      cta: 'Shop Now',
    },
  ];

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
  const [currentItem, setCurrentItem] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const bannerScrollRef = useRef(null);
  const productGridRef = useRef(null);

  // Update banner visibility based on searchTerm or selectedCategory
  useEffect(() => {
    if (searchTerm || selectedCategory) {
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);
    }
  }, [searchTerm, selectedCategory]);

  // Handle banner auto-scroll only when banner is visible
  useEffect(() => {
    if (!isBannerVisible) return;
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length, isBannerVisible]);

  // Handle touch move to scroll to products
  useEffect(() => {
    const bannerScroll = bannerScrollRef.current;
    if (!bannerScroll) return;

    const handleTouchMove = () => {
      setIsBannerVisible(false);
      if (productGridRef.current) {
        productGridRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    bannerScroll.addEventListener('touchmove', handleTouchMove);
    return () => bannerScroll.removeEventListener('touchmove', handleTouchMove);
  }, []);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
    if (showAllCategories) {
      onCategorySelect(null);
    }
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category === 'New Deals' ? null : category);
    setIsBannerVisible(false);
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProducts = () => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsBannerVisible(false);
  };

  return (
    <section className="category-section" aria-labelledby="category-heading">
      {/* Category Navigation - Fixed at top */}
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

      {/* Banner Section - Only shown when no category selected and no search term */}
      {isBannerVisible && (
        <div className="banner-section">
          <div className="banner-container" ref={bannerScrollRef}>
            {featuredItems.map((item, index) => (
              <div
                key={item.id}
                className={`banner-item ${index === currentItem ? 'banner-item--active' : ''}`}
              >
                <div className="banner-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="banner-image"
                    loading="lazy"
                  />
                  <div className="banner-overlay"></div>
                </div>
                <div className="banner-content">
                  <h3 className="banner-title">{item.name}</h3>
                  <p className="banner-description">{item.description}</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm%20interested%20in%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="banner-cta"
                    aria-label={`Shop ${item.name} now via WhatsApp`}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    {item.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="banner-dots">
            {featuredItems.map((_, index) => (
              <button
                key={index}
                className={`banner-dot ${index === currentItem ? 'banner-dot--active' : ''}`}
                onClick={() => setCurrentItem(index)}
                aria-label={`Go to banner ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            className="scroll-to-products"
            onClick={handleScrollToProducts}
            aria-label="Scroll to products"
          >
            <i className="fas fa-chevron-down"></i>
            <span>View Products</span>
          </button>
        </div>
      )}

      {/* Product Grid Reference Point */}
      <div ref={productGridRef} className="product-grid-anchor" />
    </section>
  );
}

export default CategoryList;
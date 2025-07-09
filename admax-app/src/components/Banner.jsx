import React, { useState, useEffect, useRef } from 'react';
import './styles/Banner.css';

function Banner() {
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
  const bannerRef = useRef(null);

  // Handle banner auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  // Handle touch move to scroll to products
  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const handleTouchMove = () => {
      const productGrid = document.querySelector('.product-grid-anchor');
      if (productGrid) {
        productGrid.scrollIntoView({ behavior: 'smooth' });
      }
    };

    banner.addEventListener('touchmove', handleTouchMove);
    return () => banner.removeEventListener('touchmove', handleTouchMove);
  }, []);

  const handleScrollToProducts = () => {
    const productGrid = document.querySelector('.product-grid-anchor');
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner-section">
      <div className="banner-container" ref={bannerRef}>
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
  );
}

export default Banner;
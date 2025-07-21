import React from 'react';
import './styles/Brands.css';

function Brands() {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <div className="brands-marquee">
            
          <img
            src="BrandA.jpeg"
            alt="Brand 1 Logo"
            className="brand-image"
          />
          <img
            src="BrandB.jpeg"
            alt="Brand 2 Logo"
            className="brand-image"
          />
          <img
            src="BrandA.jpeg"
            alt="Brand 1 Logo"
            className="brand-image"
          />
          <img
            src="BrandB.jpeg"
            alt="Brand 2 Logo"
            className="brand-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Brands;
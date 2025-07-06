import React from 'react';
import './styles/ProductCard.css';

function ProductCard({ product }) {
  const handleImageError = (e) => {
    e.target.src = '/images/fallback.png'; // fallback image in public/images
  };

  return (
    <article className="product-card" tabIndex="0">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <button 
          className="product-button"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

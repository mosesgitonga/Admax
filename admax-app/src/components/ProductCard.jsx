import React, { memo } from 'react';
import './styles/ProductCard.css';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

function ProductCard({ product }) {
  const handleImageError = (e) => {
    e.target.src = '/images/fallback.png';
  };

  return (
    <article className="product-card" tabIndex="0">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image"
        onError={handleImageError}
        loading="lazy"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20priced%20at%20$${product.price.toFixed(2)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="product-button"
          aria-label={`Buy ${product.name} now via WhatsApp`}
        >
          Buy Now
        </a>
      </div>
    </article>
  );
}

export default memo(ProductCard);
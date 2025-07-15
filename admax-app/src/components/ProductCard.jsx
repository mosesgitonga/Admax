import React, { useState } from 'react';
import './styles/ProductCard.css';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '+254....890';

function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageError = (e) => {
    e.target.src = '/images/fallback.png';
    e.target.classList.add('image-error');
  };

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      const message = `👋 Hello! I'm interested in the "${product.name}" 🛍️. ${product.description} 😊 Could you please share more details? Thanks! 🙏`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <article className={`product-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <p className="product-price">Ksh {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>

        
        <button 
          className="product-button" 
          onClick={handleClick}
          aria-label={isExpanded ? "send to buy" : "checkout"}
        >
          {isExpanded ? (
            <>
              <span>Buy on WhatsApp</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
            </>
          ) : 'checkout'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
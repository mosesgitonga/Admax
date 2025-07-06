import React from 'react';
import './styles/ProductGrid.css';

function ProductGrid({ products, isLoading }) {
  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';

  return (
    <section className="product-section" aria-labelledby="products-heading">
      <div className="product-container">
        <h2 id="products-heading" className="product-heading">Featured Tech</h2>
        <div className="product-grid">
          {isLoading ? (
            Array(8).fill().map((_, index) => (
              <article key={`skeleton-${index}`} className="product-card skeleton">
                <div className="product-image-wrapper skeleton-image"></div>
                <div className="product-content">
                  <div className="skeleton-text skeleton-name"></div>
                  <div className="skeleton-text skeleton-price"></div>
                  <div className="skeleton-text skeleton-description"></div>
                  <div className="skeleton-text skeleton-button"></div>
                </div>
              </article>
            ))
          ) : products.length === 0 ? (
            <p className="no-products">No products found.</p>
          ) : (
            products.map((product) => (
              <article key={product.id} className="product-card" tabIndex="0">
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />
                </div>
                <div className="product-content">
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
                    <i className="fas fa-shopping-cart"></i> Buy Now
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(ProductGrid);
import React from 'react';
import './styles/ProductGrid.css';

function ProductGrid({ products }) {
  return (
    <section 
      className="product-section"
      aria-labelledby="products-heading"
    >
      <div className="product-container">
        <h2 
          id="products-heading" 
          className="product-heading"
        >
          Featured Tech
        </h2>
        <div className="product-grid">
          {products.map((product) => (
            <article 
              key={product.id} 
              className="product-card"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-name">
                  {product.name}
                </h3>
                <p className="product-price">
                  ${product.price.toFixed(2)}
                </p>
                <button 
                  className="product-button"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
import React from "react";
import ProductCard from "./ProductCard";
import "./styles/ProductGrid.css";

function ProductGrid({ products, isLoading }) {
  return (
    <section className="product-grid-section">
      <div className="grid-container">
        <h2 className="section-title">Featured Tech</h2>

        <div className="products-grid">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="product-card skeleton">
                <div className="card-image skeleton-image"></div>
                <div className="card-content">
                  <div className="skeleton-line name-line"></div>
                  <div className="skeleton-line price-line"></div>
                  <div className="skeleton-button"></div>
                </div>
              </div>
            ))
          ) : products.length === 0 ? (
            <div className="empty-state">
              <p>No products available</p>
            </div>
          ) : (
            products.map((product, index) => (
              <ProductCard
                key={`${product.id}-${product.name}-${index}`}
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default React.memo(ProductGrid);

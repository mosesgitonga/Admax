import React, { useState, useRef } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import products from './data/products';
import './App.css';
import Banner from './components/Banner';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const productGridRef = useRef(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : searchQuery
      ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : products;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search when selecting a category
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Reset category when searching
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Header
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      {!searchQuery && !selectedCategory && <Banner />}
      {(searchQuery || selectedCategory) && (
        <div className="filter-info">
          {selectedCategory ? (
            <h2 className="filter-title">Category: {selectedCategory}</h2>
          ) : (
            <h2 className="filter-title">Search: "{searchQuery}"</h2>
          )}
        </div>
      )}
      <div ref={productGridRef} className="product-grid-anchor" />
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
}

export default App;
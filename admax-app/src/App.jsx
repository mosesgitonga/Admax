import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import ProductGrid from './components/ProductGrid';
import products from './data/products';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : searchQuery
      ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : products;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search when selecting a category
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Reset category when searching
  };

  return (
    <div className="app-container">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <CategoryList onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
}

export default App;
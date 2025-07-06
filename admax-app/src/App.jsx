import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { id: 1, name: 'Gaming Laptop Pro', price: 1299.99, image: 'https://via.placeholder.com/400x300?text=Gaming+Laptop', category: 'Laptops' },
    { id: 2, name: 'Wireless Mouse', price: 49.99, image: 'https://via.placeholder.com/400x300?text=Wireless+Mouse', category: 'Accessories' },
    { id: 3, name: 'Antivirus Software', price: 29.99, image: 'https://via.placeholder.com/400x300?text=Antivirus+Software', category: 'Utilities, Anti-virus, Security' },
    { id: 4, name: 'Refurbished Desktop', price: 599.99, image: 'https://via.placeholder.com/400x300?text=Desktop', category: 'Refurbished Deals' },
    { id: 5, name: 'Gaming Headset', price: 89.99, image: 'https://via.placeholder.com/400x300?text=Headset', category: 'Gaming' },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : searchQuery
      ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : products;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
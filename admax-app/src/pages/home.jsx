import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';
import "./styles/home.css"

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <Header />
      <CategoryList />
      <SearchBar onSearch={setSearchTerm} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default Home;
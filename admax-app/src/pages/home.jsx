import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';
import './styles/home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [error, setError] = useState(null);

  // Simulate async fetch (toggleable for static data)
  const USE_STATIC_DATA = false; // Set to true to bypass async fetch for testing

  useEffect(() => {
    if (USE_STATIC_DATA) {
      setFetchedProducts(products);
      setIsLoading(false);
      return;
    }

    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFetchedProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!fetchedProducts.length) return [];
    return selectedCategory
      ? fetchedProducts.filter(product => product.category === selectedCategory)
      : searchTerm
        ? fetchedProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : fetchedProducts;
  }, [fetchedProducts, selectedCategory, searchTerm]);

  if (error) {
    return (
      <div className="home-container">
        <Header />
        <SearchBar onSearch={setSearchTerm} />
        <CategoryList onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <CategoryList onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      <ProductGrid products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default Home;
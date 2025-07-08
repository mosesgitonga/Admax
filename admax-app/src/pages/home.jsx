import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';
import './styles/home.css';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const USE_STATIC_DATA = false;

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
      : debouncedSearchTerm
        ? fetchedProducts.filter(product => product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
        : fetchedProducts;
  }, [fetchedProducts, selectedCategory, debouncedSearchTerm]);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    fetchProducts();
  };

  if (error) {
    return (
      <div className="home-container" aria-live="polite">
        <Header onSearch={setSearchTerm} onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
        <div className="error-message">
          {error}
          <button
            className="retry-button"
            onClick={handleRetry}
            aria-label="Retry loading products"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container" aria-live="polite">
      <Header onSearch={setSearchTerm} onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      <CategoryList
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
        searchTerm={debouncedSearchTerm}
      />
      <ProductGrid products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}

export default Home;
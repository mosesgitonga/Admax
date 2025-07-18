import { useState, useRef } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import products from './data/products';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const productGridRef = useRef(null);

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory = selectedCategories.length > 0
      ? selectedCategories.some(cat => product.categories?.includes(cat))
      : true;

    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (categories) => {
    setSelectedCategories(categories);
    setSearchQuery('');
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedCategories([]);
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Header
        onCategorySelect={handleCategorySelect}
        selectedCategories={selectedCategories}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />

      {!searchQuery && selectedCategories.length === 0 && <Banner />}

      {(searchQuery || selectedCategories.length > 0) && (
        <div className="filter-info">
          {selectedCategories.length > 0 ? (
            <h2 className="filter-title">Categories: {selectedCategories.join(', ')}</h2>
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
      <Footer />
    </div>
  );
}

export default App;

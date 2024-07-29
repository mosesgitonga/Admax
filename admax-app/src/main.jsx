import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import Catalog from "./components/catalog/Catalog";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </ErrorBoundary>
  </Router>
);

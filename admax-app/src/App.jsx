import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Body from './components/body';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import WhatsAppLink from './components/WhatsAppLink';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    
    </Router>
  );
};

export default App;

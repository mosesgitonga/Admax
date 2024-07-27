import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import NavBar from './NavBar';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Admax Tech Solutions | Computer Repair & Sales in Nyeri</title>
        <meta name="description" content="Admax Tech Solutions provides expert computer repair services and sells both new and refurbished computers and accessories in Nyeri Town." />
        <meta name="keywords" content="computer repair, phone repairs, computer sales, laptops for sale, second hand laptops, laptop screen replacement, RAM replacement, phone screen replacement, refurbished computers, computer accessories, tech solutions, Nyeri computer repair, Admax Tech Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Admax Tech Solutions" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Admax Tech Solutions | Computer Repair & Sales in Nyeri" />
        <meta property="og:description" content="Admax Tech Solutions offers expert computer repair services and sells new and refurbished computers and accessories in Nyeri Town." />
        <meta property="og:image" content="https://www.admaxtechsolutions.co.ke/logo.jpg" />
        <meta property="og:url" content="https://www.admaxtechsolutions.co.ke/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Admax Tech Solutions" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Admax Tech Solutions | Computer Repair & Sales in Nyeri" />
        <meta name="twitter:description" content="Admax Tech Solutions offers reliable computer repair services and sells both new and refurbished computers and accessories in Nyeri Town." />
        <meta name="twitter:url" content="https://www.admaxtechsolutions.co.ke/" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Admax Tech Solutions",
              "url": "https://www.admaxtechsolutions.co.ke",
              "logo": "https://www.admaxtechsolutions.co.ke/logo.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254711279189",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gakere Road",
                "addressLocality": "Nyeri",
                "addressRegion": "Central Kenya",
                "addressCountry": "Kenya"
              },
              "description": "Admax Tech Solutions offers expert computer repair services and sells new and refurbished computers and accessories in Nyeri Town."
            }
          `}
        </script>

        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <header className="header">
        <div className="bar">
          <h1>Admax Tech Solutions</h1>
        </div>
        <NavBar menuOpen={menuOpen} />
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </div>
      </header>
    </div>
  );
};

export default Header;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import "./Catalog.css";

const CatalogIntro = () => {
  const items = [
    { image: "products/Hp 840.jpeg", name: "HP 840 G3", price: "ksh 27,000", description: 'Laptop comes with 14" HD Display, intel core i5-6300U, 2.4GhZ, 256GB SSD, 8GB DDR4 RAM' },
    { image: "products/lenovo x240.jpeg", name: "Lenovo X240", price: "ksh 24,000", description: 'Laptop comes with 12.5" HD Display, intel core i5-4300U, 128GB SSD, 8GB DDR4 RAM' },
    { image: "products/lenovo s240.jpeg", name: "Lenovo X240", price: "ksh 21,000", description: 'Laptop comes with 12.5" HD Display, intel core i5-4210U, 500GB HDD, 4GB DDR3 RAM' },
    { image: "products/huawei xpon.jpeg", name: "Huawei XPON", price: "ksh 4,500", description: "" },
    { image: "products/acer adapter.jpeg", name: "Acer Adapter", price: "ksh 1,500", description: "65w" },
    { image: "products/type c adpater laptop.jpeg", name: "Type C Adapter", price: "ksh 4,000", description: "For all type C laptops, tablets etc. Max 65w" },
    { image: "products/Hp Big pin.jpeg", name: "HP big pin", price: "ksh 1,500", description: "65w" },
    { image: "products/hdcvi.jpeg", name: "HDCVI DIGITAL VIDEO RECORDER", price: "ksh 2,000", description: "" },
    { image: "products/Hp blue pin.jpeg", name: "HP blue pin", price: "ksh 1,500", description: "65w" },
    { image: "products/m10 buds.jpeg", name: "M10 buds", price: "ksh 1,500", description: "" },
  ];

  const phoneNumber = "+254711279189";
  const message = "Hello, I would like to know more about this product: ";

  const openWhatsApp = (item) => {
    const whatsappMessage = `${message}${item.name} (${item.price}). Check out the image here: ${window.location.origin}/${item.image}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="catalog">
      <div className="heading">
        <h2>Laptops For Sale</h2>
        <p>DEALS ON EX-UK LAPTOPS & ACCESSORIES</p>
      </div>

      <div className="catalog">
        {items.map((item, index) => (
          <div key={index} className="catalog-item">
            <div className="item-image">
              <img src={item.image || "placeholder.png"} alt={item.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <p className="item-description">{item.description}</p>
              <button className="whatsapp-button" onClick={() => openWhatsApp(item)}>
                <FontAwesomeIcon icon={faWhatsapp} /> Contact on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="seeAll">
        <Link to="/catalog">See All Products</Link>
      </div>
    </div>
  );
};

export default CatalogIntro;
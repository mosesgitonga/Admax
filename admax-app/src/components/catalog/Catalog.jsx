import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Catalog.css";

const Catalog = () => {
  const items = [
    { image: "laptops/images.jpeg", name: "item 1", price: "ksh 100", description: "AI powered" },
    { image: "laptops/images1.jpeg", name: "item 2", price: "ksh 5,000", description: "Good product" },
    { image: "laptops/images3.jpeg", name: "item 3", price: "ksh 50,000", description: "powerful laptop" },
    { image: "laptops/images4.jpeg", name: "item 4", price: "ksh 90,000", description: "best seller laptop" },
    { image: "laptops/images5.jpeg", name: "item 5", price: "ksh 79,022", description: "perfect condition laptop" },
    { image: "laptops/images6.jpeg", name: "item 6", price: "ksh 10,234", description: "another product" },
    { image: "laptops/Untitled.jpeg", name: "item 7", price: "ksh 3999", description: "some short description" }
  ];

  const phoneNumber = "+254711279189";
  const message = "Hello, I would like to know more about this product: ";

  const openWhatsApp = (item) => {
    const whatsappMessage = `${message}${item.name} (${item.price}). Check out the image here: ${window.location.origin}/${item.image}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
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
    </div>
  );
};

export default Catalog;

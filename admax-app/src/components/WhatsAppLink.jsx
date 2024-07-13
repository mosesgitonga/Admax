import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './WhatsAppLink.css';

const WhatsAppLink = () => {
  const phoneNumber = "+254711279189"; 
  const message = "Hello, I would like to know more about your services."; 

  const openWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href="#"
      onClick={openWhatsApp}
      className="whatsappLink"
      aria-label="Open WhatsApp"
    >
      Contact us:
      <FontAwesomeIcon icon={faWhatsapp} size="5x" style={{ color: '#25D366', boxShadow: 'blue 0px 5px 10px', borderRadius: '50%' }} />
    </a>
  );
};

export default WhatsAppLink;

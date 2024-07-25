import React from 'react';
import { FaGlobe, FaEnvelope, FaShoppingCart, FaCloud, FaThumbsUp, FaLink, FaNewspaper, FaServer } from 'react-icons/fa';
import './internetTheme.css';

const InternetTheme = () => {
  return (
    <div className="internet-theme">
      <div className="central-icon">
        <FaGlobe size={50} />
      </div>
      <div className="icon email">
        <FaEnvelope size={30} />
      </div>
      <div className="icon shopping">
        <FaShoppingCart size={30} />
      </div>
      <div className="icon cloud">
        <FaCloud size={30} />
      </div>
      <div className="icon thumbs-up">
        <FaThumbsUp size={30} />
      </div>
      <div className="icon link">
        <FaLink size={30} />
      </div>
      <div className="icon newspaper">
        <FaNewspaper size={30} />
      </div>
      <div className="icon server">
        <FaServer size={30} />
      </div>
    </div>
  );
};

export default InternetTheme;

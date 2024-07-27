import React, { useState } from "react";
import './Services.css'; // Advanced styling with animations

const Services = () => {
  const services = [
    { heading: "LAPTOP SCREEN REPLACEMENT", image: "IMG-20240723-WA0002.jpg", paragraph: "We replace broken laptop screens for all models and size ranging from 10.5 inches to 17 inches. We offer both new and exuk types to meet your quality expectations and budget." },
    { heading: "PHONE REPAIRS", image: "IMG-20240723-WA0003.jpg", paragraph: "We test, diagnose troubleshoot and repair smartphones and tablets" },
    { heading: "PHONE SCREEN REPLACEMENT", image: "IMG-20240723-WA0004.jpg", paragraph: "We fix the phone by replacing the entire screen including lcd & touchscreen plus a free screen protector as a bonus" },
    { heading: "RAM REPLACEMENT", image: "IMG-20240723-WA0007.jpg", paragraph: "We replace & upgrade RAM to give you faster boot-up and shutdown times, as well as smoother program launches and task executions"},
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id="services" className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className={`marquee ${isHovered ? 'paused' : ''}`}>
        <div className="marquee-content">
          {services.map((service, index) => (
            <div
              className="service"
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {service.image && <img src={service.image} alt={service.heading} className="service-image" loading="lazy" />}
              <h2 className="service-heading">{service.heading}</h2>
              <p className="service-paragraph">{service.paragraph}</p>
            </div>
          ))}
          {services.map((service, index) => (
            <div
              className="service"
              key={index + services.length}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {service.image && <img src={service.image} alt={service.heading} className="service-image" loading="lazy" />}
              <h2 className="service-heading">{service.heading}</h2>
              <p className="service-paragraph">{service.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

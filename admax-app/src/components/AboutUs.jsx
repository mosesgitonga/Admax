import React from 'react';
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
      <div className='cover'>
        <div className="cover-background"></div>
        <div className="cover-content">
          <div className="columns">
            <div className="column">
              <h2>100%</h2>
              <h3>Reliability Guaranteed</h3>
              <p>Count on us for reliable, top-quality computer repairs and refurbished devices that exceed your expectations.</p>
            </div>
            <div className="column">
              <h2>24/7</h2>
              <h3>Always Available</h3>
              <p>We’re here for you 24/7, ready to provide expert computer repairs and support whenever you need it.</p>
            </div>
            <div className="column">
              <h2>99%</h2>
              <h3>Customer Satisfaction</h3>
              <p>Our top priority is your satisfaction. We strive for 99% customer satisfaction with every service we provide.</p>
            </div>
            <div className="column">
              <h2>100%</h2>
              <h3>Expert Technicians</h3>
              <p>Our team of expert technicians ensures 100% quality and precision in every computer repair and installation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default AboutUs;
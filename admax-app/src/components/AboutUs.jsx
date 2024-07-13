import React from 'react';
import "./AboutUs.css";
import Header from '.';

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className='section'>
        <div className="section-overlay"></div>
        <div className="section-content">
          <div className="section-columns">
            <div className="section-column">
              <h2 className="section-heading">100%</h2>
              <h3 className="section-subheading">Reliability Guaranteed</h3>
              <p className="section-paragraph">Count on us for reliable, top-quality computer repairs and refurbished devices that exceed your expectations.</p>
            </div>
            <div className="section-column">
              <h2 className="section-heading">24/7</h2>
              <h3 className="section-subheading">Always Available</h3>
              <p className="section-paragraph">We’re here for you 24/7, ready to provide expert computer repairs and support whenever you need it.</p>
            </div>
            <div className="section-column">
              <h2 className="section-heading">99%</h2>
              <h3 className="section-subheading">Customer Satisfaction</h3>
              <p className="section-paragraph">Our top priority is your satisfaction. We strive for 99% customer satisfaction with every service we provide.</p>
            </div>
            <div className="section-column">
              <h2 className="section-heading">100%</h2>
              <h3 className="section-subheading">Expert Technicians</h3>
              <p className="section-paragraph">Our team of expert technicians ensures 100% quality and precision in every computer repair and installation.</p>
            </div>
          </div>
        </div>

        <div className="section-cover alignfull is-light">
          <span aria-hidden="true" className="section-background"></span>
          <div className="section-inner-container">
            <div className="section-columns">
              <div className="section-column">
                <figure className="section-image">
                  <img src="https://images.unsplash.com/photo-1617897711385-df9c86b7dfe3?ixid=M3w1NjExMzd8MHwxfHNlYXJjaHwzfHxjY3R2JTIwfGVufDB8fHx8MTcyMDg2NzY4OXww&ixlib=rb-4.0.3&fm=webp&w=1024&h=682&fit=crop" alt="Tech Service" className="section-image" />
                </figure>
              </div>
              <div className="section-column is-vertically-aligned-center">
                <h2 className="section-heading">Committed to Excellence: Our Story</h2>
                <p className="section-paragraph">At AdMax Tech Solutions, we are passionate about providing top-notch computer repair services, including SSD and HDD repairs, laptop screen replacements, battery and keyboard fixes, as well as addressing charging issues, BIOS errors, broken casings, and hinges. Our dedication to excellence extends to offering refurbished and second-hand devices, as well as professional CCTV installations and smartphone repairs. With a team of skilled technicians, we are committed to delivering reliable solutions to meet all your tech needs. Trust us to keep you connected and your devices running smoothly.</p>
              </div>
            </div>

            <div className="section-columns">
              <div className="section-column is-vertically-aligned-center">
                  <h2 className="section-heading">Our Missions: Elevating Expectations</h2>
                  <p className="section-paragraph">Our mission at AdMax Tech Solutions is to elevate expectations in the tech industry by providing exceptional repair services and innovative solutions.</p>
                  <div className="section-buttons">
                    <a className="section-button" href="#">Elevate Now!</a>
                  </div>
                </div>
                <div className="section-column">
                  <figure className="section-image">
                    <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?ixid=M3w1NjExMzd8MHwxfHNlYXJjaHwyMHx8cGhvbmUlMjByZXBhaXJ8ZW58MHx8fHwxNzIwODY3NzM1fDA&ixlib=rb-4.0.3&fm=webp&w=1024&h=682&fit=crop" alt="Mission Image" className="section-image" />
                  </figure>
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default AboutUs;

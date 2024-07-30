import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2 className="footer-title">Admax Tech Solutions</h2>
          <p className="footer-description">
            Providing the best tech solutions for all your business needs. 
            Contact us for more information and services.
          </p>
          <div className="footer-contact">
            <p><strong>Email:</strong> admaxtechsoln@gmail.com</p>
            <p><strong>Phone:</strong> +254 711 279 189</p>
          </div>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Useful Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/catalog">Catalog</a></li>
          </ul>
        </div>
        <div className="footer-section services">
          <h2 className="footer-title">Our Services</h2>
          <ul>
            <li>Laptop Screen Replacement</li>
            <li> Phone Repairs</li>
            <li>Phone Screen Replacement</li>
            <li>RAM Replacement</li>
            <li>KeyBoard Replacement</li>

          </ul>
        </div>
        <div className="footer-section social">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://web.facebook.com/mike.manaseh.7" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/miketechguyke" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a href={`https://wa.me/+254711279189`} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Admax Tech Solutions | All Rights Reserved | Developed By <a href="https://moses-gitonga.vercel.app" target="_blank">Moses Gitonga</a>
      </div>
    </footer>
  );
};

export default Footer;

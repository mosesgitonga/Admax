import "./styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div id="about" className="footer-section about-section">
          <div className="company-brand">
            <h3 className="company-name">Admax Tech Solutions</h3>
            <p className="company-tagline">Innovative Technology Solutions</p>
          </div>
          <p>
            We specialize in cutting-edge IT solutions, hardware sales, and
            technical support services. Our expertise spans enterprise software,
            networking solutions, and custom tech implementations.
          </p>
        </div>

        <div id="contact" className="footer-section contact-section">
          <h3>Get In Touch</h3>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>admaxtechsol@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+254 711 279 189</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Nyeri,Kenya</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <span>Mon-Sun: Open 24 hrs </span>
          </div>
        </div>

        <div className="footer-section services-section">
          <h3>Our Services</h3>
          <ul className="services-list">
            <li>Dealers in PC, <br />Laptops,Macboooks,<br />Mobile,Tablets,iphones</li>
            <li>Electronics Repair</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Admax Tech Solutions. All rights reserved.</p>
          <div className="social-icons">
            <a
              href="https://wa.me/254711279189"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

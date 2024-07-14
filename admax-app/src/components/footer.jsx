import React from "react";
import WhatsAppLink from "./WhatsAppLink";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>
            Ready to get your tech issues resolved? Contact us today and let
            our expert team provide you with the best solutions for all your
            computer and smartphone repair needs.
          </p>
        </div>
        <div className="footer-section">
          <h6>Contact</h6>
          <ul>
            <li>Gakere road - Batian House, Nyeri</li>
            <li>0711 279 189</li>
            <li>
              WhatsApp: <WhatsAppLink />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>Copyright &copy; 2024 admaxtechsolutions.co.ke . All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

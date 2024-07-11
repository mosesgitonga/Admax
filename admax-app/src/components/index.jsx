import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Index.css"

const IndexPage = () => {
    const WhatsAppLink = () => {
        const phoneNumber = "+254711279189"; 
        const message = "Hello, I would like to know more about your services."; 

        return (
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
          </a>
        );
      };
      
    return (
        <div className="container">
            <header>
                <div>
                    <div className="bar">
                        <h1>Admax Tech Solutions</h1>
                        <div className="top-nav">
                            <div>Home</div>
                            <div>Services</div>
                            <div>About Us</div>
                            <div>Contact Us</div>
                            <WhatsAppLink className="whatsappLink" />
                        </div>
                    </div>
                </div>
            </header>
            <section className="body">

            </section>
        </div>
    )
}

export default IndexPage;
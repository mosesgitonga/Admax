import React from "react";
import "./Map.css"

const Map = ({ width = "600", height = "450" }) => {
    return (
        <div>
            <div className="mapContainer">
                <div className="location">
                    <h2>Visit Us Today</h2>
                    <p>We are Located at Batian house - Gakere Road - Nyeri</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.67558199373235!2d36.953174805347!3d-0.42348616232168673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285fc007eb1d33%3A0x91bd8681b919f716!2sAdmax%20Tech%20Solutions!5e0!3m2!1sen!2ske!4v1722028437972!5m2!1sen!2ske"
                    width={width}
                    height={height}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;


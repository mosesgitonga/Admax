import React, { useState, useEffect } from "react";
import Welcome from "./body/Welcome";
import Solutions from "./body/Solutions";
import Testimonies from "./body/Testimonies";
import Header from ".";
import "./Body.css";
import Footer from "./footer";
import AboutUs from "./AboutUs";

const Body = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        const checkIfLoaded = () => {
            // Check if the iframe contentWindow is accessible
            const iframe = document.getElementById("google-map-iframe");
            if (iframe && iframe.contentWindow) {
                setMapLoaded(true);
            }
        };

        const timeout = setTimeout(() => {
            // Set a timeout to check if the map is loaded after a delay
            checkIfLoaded();
        }, 5000); // Adjust the timeout value as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Header className="header" />
            <div className="body-container">
                <Welcome />
                <Solutions />
                <Testimonies />
                {!mapLoaded && (
                    <div
                        className="map-placeholder"
                        style={{
                            width: "100%",
                            height: "400px",
                            backgroundColor: "lightgray", // Placeholder background color
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "1.5rem",
                            color: "#333",
                        }}
                    >
                        Loading Map...
                    </div>
                )}
                <h3>Visit Us Today</h3>
                <iframe
                    id="google-map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2137.453502185898!2d36.952653042722865!3d-0.42340393086119005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285fc007eb1d33%3A0x91bd8681b919f716!2sAdmax%20Tech%20Solutions!5e0!3m2!1sen!2ske!4v1720975709319!5m2!1sen!2ske" 
                    width="100%"
                    height="450"
                    style={{
                        border: "0",
                        maxWidth: "100%",
                        height: "400px",
                        display: mapLoaded ? "block" : "none",
                    }}
                    loading="lazy"
                    title="Google Maps"
                    onLoad={() => setMapLoaded(true)} // Update state directly on load event
                ></iframe>
                <Footer />
            </div>
        </>
    );
};

export default Body;
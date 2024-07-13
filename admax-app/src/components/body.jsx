import React from "react";
import Welcome from "./body/Welcome";
import Solutions from "./body/Solutions";
import Testimonies from "./body/Testimonies";
import Header from ".";
import "./Body.css"
import Footer from "./footer";
import AboutUs from "./AboutUs";

const Body = () => {
    return (
        <>
        <Header className="header"/>
            <div className="body-container">
                <Welcome />
                <AboutUs />
                <Solutions />
                <Testimonies />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127670.70077372756!2d36.87111892489156!3d-0.4233681621727913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18285fc007eb1d33%3A0x91bd8681b919f716!2sAdmax%20Tech%20Solutions!5e0!3m2!1sen!2ske!4v1720785962891!5m2!1sen!2ske" 
                    width="300" 
                    height="450" 
                    style={{ border: "0", width: "100%", height: "400px" }} 
                    loading="lazy" 
                ></iframe>
                <Footer />
            </div>
        </>
    )
}

export default Body;

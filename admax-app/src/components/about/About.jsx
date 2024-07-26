import React from "react";
import './About.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <section className="about-us-header">
                <h1>About Us</h1>
                <p>Welcome to Admax Tech Solutions. We are dedicated to providing the best tech solutions for your business.</p>
            </section>
            <section className="about-us-mission">
                <h2>Our Mission</h2>
                <p>To deliver innovative and reliable technology solutions that empower businesses to achieve their goals.</p>
            </section>
            <section className="about-us-vision">
                <h2>Our Vision</h2>
                <p>To be a leading provider of tech solutions, recognized for our commitment to excellence and customer satisfaction.</p>
            </section>
            <section className="about-us-team">
                <h2>Meet Our Team</h2>
                <p>Our team is composed of experienced professionals who are passionate about technology and dedicated to delivering exceptional service.</p>
            </section>
        </div>
    );
};

export default AboutUs;

import React from "react";
import "./Welcome.css"

const Welcome = () => {
  return (
    <div className="container">
      <section id="intro">
        <div className="text">
          <h1>Welcome To Admax Tech Solutions</h1>
          <p>Affordable | Fast | Trusted | Service</p>
        </div>
        <div className="image">
            <img src="main.jpg" alt="phone image"/>
        </div>
      </section>
    </div>
  );
};

export default Welcome;

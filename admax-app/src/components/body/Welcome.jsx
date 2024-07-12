import React from "react";
import WhatsAppLink from "../WhatsAppLink";
import "./Welcome.css"

const Welcome = () => {
    return (
        <div className="welcome">
            <div>
                <h1>Welcome To Admax Tech Solution</h1>
                <p>Expert Computer Repair and Maintenance Services</p>
                <p>At Admax Tech Solutions, we provide top-notch computer repair services, including SSD/HDD, laptop screens, and more.</p>
                <p> Contact us on Whatsapp for inquiries: <WhatsAppLink /> </p>
            </div>
            <div className="welcome-icon">
                <img src="Phone-13-1.png" alt="phone image" />
            </div>
        </div>
    
    )
}

export default Welcome;
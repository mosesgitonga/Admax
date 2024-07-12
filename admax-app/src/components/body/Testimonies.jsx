import React from "react";
import "./Testimonies.css";

const Testimonies = () => {
    return (
        <div className="t-section">
        <h4>Testimonies</h4>
            <div className="testimonies">
                <div>
                    <img src="Quote-1.png" alt="" />
                    <p>Admax Tech Solutions saved my computer! Fast and reliable service, highly recommend.</p>
                    <p>Sarah Kimani</p>
                </div>
                <div>
                    <img src="Quote-1.png" alt="" />
                    <p>I was impressed with the professionalism and efficiency of Admax Tech Solutions. Great service!</p>
                    <p>David</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonies;

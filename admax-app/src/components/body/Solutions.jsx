import React from "react";
import "./Solutions.css"

const Solutions = () => {
    return (
        <div className="solutions">
            <div>
                <h3>Quality Tech Solutions For You</h3>
                <p>At Admax Tech Solutions, we offer top-quality tech products and services tailored to meet your needs. From computer repairs to refurbished devices and CCTV installations, we have everything you need to keep your tech running smoothly.</p>
                <button>Explore Now</button>
            </div>
            <div>
                <img src="rainbowLaptop.webp" alt="rainbow like laptop" />
            </div>
            <div>
                <p>Our Services and Products</p>
                <ul>
                    <li>Computer Repairs</li>
                    <li>CCTV Installations</li>
                    <li>Refurbished Devices</li>
                    <hr></hr>
                    <li>Smartphones Repairs</li>
                    <li>SSD/HDD/RAM Upgrades</li>
                    <li>Laptop Screens</li>
                </ul>
            </div>
        </div>
    )
}

export default Solutions;
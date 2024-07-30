import React from "react";
import Header from "./components/intro/Header";
import Welcome from "./components/intro/Welcome";
import "./App.css"
import Services from "./components/content/Services";
import CatalogIntro from "./components/catalog/CatalogIntro";
import AboutUs from "./components/about/About";
import Map from "./components/map";
import Footer from "./components/footer/Footer";
import FAQS from "./components/faqs/FAQ";
import Testimonial from "./components/testimonial/testimonial";

const App = () => {
    return (
        <div>
            <div id="background-image">
                <Header className="header" />
                <Welcome />
            </div>
            <Services />
            <CatalogIntro />
            <AboutUs />
            <FAQS />
            <Testimonial />
            <Map width="800" height="600" />
            <Footer />
        </div>
    )
}

export default App;
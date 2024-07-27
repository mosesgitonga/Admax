import React from "react";
import Header from "./components/intro/Header";
import Welcome from "./components/intro/Welcome";
import "./App.css"
import Services from "./components/content/Services";
import Catalog from "./components/catalog/Catalog";
import AboutUs from "./components/about/About";
import Map from "./components/map";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <div id="background-image">
                <Header className="header" />
                <Welcome />
            </div>
            <Services />
            <Catalog />
            <AboutUs />
            <Map width="800" height="600" />
            <Footer />
        </div>
    )
}

export default App;
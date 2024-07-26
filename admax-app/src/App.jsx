import React from "react";
import Header from "./components/intro/Header";
import Welcome from "./components/intro/Welcome";
import "./App.css"
import InternetTheme from "./components/internetTheme";
import Services from "./components/content/Services";
import Catalog from "./components/catalog/Catalog";
import AboutUs from "./components/about/About";

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
            <InternetTheme />
        </div>
    )
}

export default App;
import React from "react";
import Header from "./components/intro/Header";
import Welcome from "./components/intro/Welcome";
import "./App.css"
import InternetTheme from "./components/internetTheme";
import Services from "./components/content/Services";
import Catalog from "./components/catalog/Catalog";

const App = () => {
    return (
        <div>
            <div id="background-image">
                <Header />
                <Welcome />
            </div>
            <Services />
            <Catalog />
            <InternetTheme />
        </div>
    )
}

export default App;
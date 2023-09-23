import React from "react";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Pokedex />
        </div>
    );
};

export default App;

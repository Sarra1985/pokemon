import React from "react";
import "../styles/pokemon.css";

const Pokemon = (props) => {
    const { name, info, picture } = props.pokemon;

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <img src={picture} alt="Image du pokémon" />
                    </div>
                    <div className="col">
                        <h3>{name}</h3>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;

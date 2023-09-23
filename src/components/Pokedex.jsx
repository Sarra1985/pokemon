import React, { useEffect, useState } from "react";
import pokemonApi from "../services/pokemonApi";
import Pokemon from "./Pokemon";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

    const [search, setSearch] = useState("");

    const fetchPokemons = async () => {
        try {
            const data = await pokemonApi.getPokemons();
            setPokemons(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    const filteredPokemon = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-5">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Rechercher un pokémon"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <div className="row">
                {filteredPokemon.length > 0 ? (
                    filteredPokemon.map((pokemon) => (
                        <div key={pokemon.id} className="col-sm-6 mt-5">
                            <Pokemon pokemon={pokemon} />
                        </div>
                    ))
                ) : (
                    <h3 style={{ marginTop: "30px" }}>Aucun resultat...</h3>
                )}
            </div>
        </div>
    );
};

export default Pokedex;

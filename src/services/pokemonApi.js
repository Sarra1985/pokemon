import Axios from "axios";

function getPokemons() {
    return Axios.get("http://localhost:3000/pokemons").then((res) => res.data);
}

export default {
    getPokemons,
};

import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import SearchBar from "./SearchBar";
import DeckList from "./DeckList";

export default function Deck() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    const allPokemon = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 152; i++) {
      allPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(allPokemon.map((poke) => axios.get(poke)))
      .then((res) => setPokemon(res));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handlePokemonSearch = (name) => {
    const filteredPokemon = [];
    if (name === "") {
      getPokemon();
    }
    for (const i in pokemon) {
      if (pokemon[i].data.name.includes(name)) {
        filteredPokemon.push(pokemon[i]);
      }
    }
    setPokemon(filteredPokemon);
  };

  return (
    <div className="Deck">
      <div className="deckList">
        <SearchBar handlePokemonSearch={handlePokemonSearch} />
        <div className="pokemonList">
          {pokemon.map((poke) => (
            <div>
              <DeckList
                name={poke.data.name}
                image={poke.data.sprites.other.dream_world.front_default}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

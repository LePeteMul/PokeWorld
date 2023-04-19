import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DeckList from "./DeckList";

export default function Deck() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(pokemon);

  const getPokemon = () => {
    const allPokemon = [];
    for (let i = 1; i < 152; i += 1) {
      allPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(allPokemon.map((poke) => axios.get(poke)))
      .then((res) => setPokemon(res))
      .then(() => console.warn(pokemon));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setFilter(
      pokemon.filter((el) =>
        el.data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemon]);

  return (
    <div className="Deck">
      <div className="deckList">
        <SearchBar handleSearchChange={handleSearchChange} />

        <div className="pokemonList">
          {filter.map((poke) => (
            <div>
              <DeckList
                name={poke.data.name}
                image={poke.data.sprites.other.dream_world.front_default}
                id={poke.data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

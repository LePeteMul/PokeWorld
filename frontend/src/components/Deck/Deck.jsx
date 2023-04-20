import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import DeckList from "./DeckList";

export default function Deck({ pokemon }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

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
            <div key={poke.data.id}>
              <DeckList
                name={poke.data.name}
                image={poke.data.sprites.other.dream_world.front_default}
                id={poke.data.id}
                key={poke.data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Deck.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

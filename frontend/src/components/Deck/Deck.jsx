import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import DeckList from "./DeckList";

export default function Deck({ pokemon, selectedType, selectedHeight }) {
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState([]);

  console.info(selectedHeight);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setIsFiltered(
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
          {isFiltered
            .filter((e) => {
              return selectedType === ""
                ? { e }
                : e.data.types[0].type.name === selectedType;
            })
            .map((poke) => (
              <div key={poke.data.id}>
                <DeckList
                  name={poke.data.name}
                  image={poke.data.sprites.other.dream_world.front_default}
                  id={poke.data.id}
                  type={poke.data.types[0].type.name}
                  height={poke.data.height}
                  weight={poke.data.weight}
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
  selectedType: PropTypes.string.isRequired,
  selectedHeight: PropTypes.string.isRequired,
};

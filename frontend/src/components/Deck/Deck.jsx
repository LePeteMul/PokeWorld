import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import DeckList from "./DeckList";

export default function Deck({
  pokemon,
  selectedType,
  selectedPoids,
  selectedHeight,
}) {
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState(pokemon);

  console.info(selectedHeight);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filteredPokemon2 = pokemon.filter((el) =>
      el.data.name.toLowerCase().includes(search.toLowerCase())
    );

    setIsFiltered(filteredPokemon2);
  }, [search, pokemon]);

  useEffect(() => {
    setIsFiltered(pokemon);
    const filteredPokemon = pokemon
      .filter(
        (el) =>
          selectedType === "" || el.data.types[0].type.name === selectedType
      )
      .filter(
        (el) =>
          selectedPoids === "" ||
          (selectedPoids === "0-30" && el.data.weight < 30) ||
          (selectedPoids === "30-100" &&
            el.data.weight >= 30 &&
            el.data.weight <= 100) ||
          (selectedPoids === "100 +" && el.data.weight > 100)
      )
      .filter(
        (el) =>
          selectedHeight === "" ||
          (selectedHeight === "0-1m" && el.data.height < 10) ||
          (selectedHeight === "1-2m" &&
            el.data.height >= 10 &&
            el.data.height <= 20) ||
          (selectedHeight === "+2m" && el.data.height > 20)
      );

    setIsFiltered(filteredPokemon);
  }, [pokemon, selectedType, selectedPoids, selectedHeight]);

  return (
    <div className="Deck">
      <div className="deckList">
        <SearchBar handleSearchChange={handleSearchChange} />

        <div className="pokemonList">
          {isFiltered.map((poke) => (
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
  selectedPoids: PropTypes.string.isRequired,
  selectedType: PropTypes.string.isRequired,
  selectedHeight: PropTypes.string.isRequired,
};

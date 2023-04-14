import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Cards from "./Cards";

function DeckList() {
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [isShown, setIsShown] = useState(false);

  const handleClickCardShown = () => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/charizard`)
      .then((res) => {
        // eslint-disable-next-line no-restricted-syntax
        console.log(res.data);
        setPokemonImg(res.data.sprites.other.dream_world.front_default);
        setPokemonName(res.data.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="DeckList">
      <button onClick={handleClickCardShown} type="button">
        <img src={pokemonImg} alt={pokemonName} />
      </button>
      {isShown && <Cards />}
    </div>
  );
}

export default DeckList;

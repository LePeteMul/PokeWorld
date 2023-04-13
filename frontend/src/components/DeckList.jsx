import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

function DeckList() {
  const [pokemonImg, setPokemonImg] = useState();
  const [pokemonName, setPokemonName] = useState();

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
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
      <img src={pokemonImg} alt={pokemonName} />
    </div>
  );
}

export default DeckList;

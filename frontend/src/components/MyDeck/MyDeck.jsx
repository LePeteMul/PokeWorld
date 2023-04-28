import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import MyDeckContainer from "./MyDeckContainer";
import "../../styles/MyDeck/_myDeck.scss";
import IntroMyDeck from "./IntroMyDeck";

function MyDeck() {
  const [favPokemon, setFavPokemon] = useState([]);
  const favArray = JSON.parse(localStorage.getItem("is-fav"));
  function getFavPokemon() {
    const allFavPokemon = [];
    for (let i = 0; i < favArray.length; i += 1) {
      allFavPokemon.push(`https://pokeapi.co/api/v2/pokemon/${favArray[i]}/`);
    }
    axios
      .all(allFavPokemon.map((poke) => axios.get(poke)))
      .then((res) => setFavPokemon(res));
  }
  console.warn(favPokemon);

  useEffect(() => {
    getFavPokemon();
  }, []);

  return (
    <>
      <Header />
      <div className="MyDeck">
        <IntroMyDeck />
        <MyDeckContainer favPokemon={favPokemon} />
      </div>
    </>
  );
}

export default MyDeck;

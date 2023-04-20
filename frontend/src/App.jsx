import { useState, useEffect } from "react";
import axios from "axios";
import Deck from "./components/Deck/Deck";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/Filtres";
import Deck from "./components/Deck/Deck";
import "./styles/_app.scss";
/* import { useEffect } from "react"; */

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    const allPokemon = [];
    for (let i = 1; i < 152; i += 1) {
      allPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(allPokemon.map((poke) => axios.get(poke)))
      .then((res) => setPokemon(res));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <Header />
      <section id="main-section">
        <div id="intro-filtres-box">
          <Intro />
          <br />
          <Filtres />
        </div>
        <Deck pokemon={pokemon} />
      </section>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import Comparator from "./components/Comparator/Comparator";
import SlideFilters from "./components/SlideFiltersMobile/SlideFilters";
import SlideButton from "./components/SlideFiltersMobile/SlideButton";
import Deck from "./components/Deck/Deck";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/filters/Filtres";
import "./styles/_app.scss";
/* import { useEffect } from "react"; */

function App() {
  const typesList = [
    "bug",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "water",
  ];

  const [pokemon, setPokemon] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [selectedPoids, setSelectedPoids] = useState("");
  const [test, setTest] = useState(false);
  const [slideIsOpened, setSlideIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  function getPokemon() {
    const allPokemon = [];
    for (let i = 1; i < 152; i += 1) {
      allPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(allPokemon.map((poke) => axios.get(poke)))
      .then((res) => setPokemon(res));
  }

  useEffect(() => {
    getPokemon();
  }, []);

  if (test === true) {
    return (
      <div>
        <Header test={test} setTest={setTest} />
        <section id="main-section-2">
          <Comparator />
          <Deck
            pokemon={pokemon}
            selectedType={selectedType}
            selectedHeight={selectedHeight}
            setSelectedType={setSelectedType}
            selectedPoids={selectedPoids}
            setSelectedPoids={setSelectedPoids}
            test={test}
          />
        </section>
      </div>
    );
  }
  return (
    <div>
      <Header test={test} setTest={setTest} />
      <section id="main-section">
        <SlideFilters
          slideIsOpened={slideIsOpened}
          setSlideIsOpened={setSlideIsOpened}
          pokemon={pokemon}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedPoids={selectedPoids}
          setSelectedPoids={setSelectedPoids}
          typesList={typesList}
          selectedHeight={selectedHeight}
          setSelectedHeight={setSelectedHeight}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <SlideButton
          slideIsOpened={slideIsOpened}
          setSlideIsOpened={setSlideIsOpened}
        />
        <div id="intro-filtres-box">
          <Intro />
          <br />
          <Filtres
            pokemon={pokemon}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedPoids={selectedPoids}
            setSelectedPoids={setSelectedPoids}
            typesList={typesList}
            selectedHeight={selectedHeight}
            setSelectedHeight={setSelectedHeight}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        </div>
        <Deck
          pokemon={pokemon}
          selectedType={selectedType}
          selectedHeight={selectedHeight}
          setSelectedType={setSelectedType}
          selectedPoids={selectedPoids}
          setSelectedPoids={setSelectedPoids}
          test={test}
          isClicked={isClicked}
        />
      </section>
    </div>
  );
}
export default App;

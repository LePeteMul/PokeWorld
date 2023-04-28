import { useState, useEffect } from "react";
import axios from "axios";
import SlideFilters from "./components/SlideFiltersMobile/SlideFilters";
import SlideButton from "./components/SlideFiltersMobile/SlideButton";
import Deck from "./components/Deck/Deck";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/filters/Filtres";
import "./styles/_app.scss";
import Playlist from "./components/Playlist";
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
  const [slideIsOpened, setSlideIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [toggleFilterPl, setToggleFilterPl] = useState(true);

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

  const handleFilterPl = () => {
    setToggleFilterPl((current) => !current);
  };

  return (
    <div>
      <Header />
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
          <div className="fl-pl-button-box">
            <button
              className="fl-pl-button"
              type="button"
              onClick={handleFilterPl}
            >
              Filters/Playlist
            </button>
          </div>
          {toggleFilterPl ? (
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
          ) : (
            <Playlist />
          )}
        </div>
        <Deck
          pokemon={pokemon}
          selectedType={selectedType}
          selectedHeight={selectedHeight}
          setSelectedType={setSelectedType}
          selectedPoids={selectedPoids}
          setSelectedPoids={setSelectedPoids}
          isClicked={isClicked}
        />
      </section>
    </div>
  );
}

export default App;

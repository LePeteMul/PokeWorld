
import Deck from "./components/Deck";

import Intro from "./components/Intro";
import Filtres from "./components/Filtres";


function App() {
  return (
    <div className="App">

      <Deck />
      <div id="intro-filtres-box">
        <p>POKEWORLD LOADING............</p>
        <Intro />
        <Filtres />
      </div>
    </div>
  );
}

export default App;

import Deck from "./components/Deck";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/Filtres";

function App() {
  return (
    <div className="App">
      <Header />
      <Deck />
      <div id="intro-filtres-box">
        <Intro />
        <Filtres />
      </div>
    </div>
  );
}

export default App;

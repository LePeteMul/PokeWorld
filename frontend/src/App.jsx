import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/Filtres";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="intro-filtres-box">
        <p>POKEWORLD LOADING............</p>
        <Intro />
        <Filtres />
      </div>
    </div>
  );
}

export default App;

/* import { useEffect } from "react"; */
import Deck from "./components/Deck/Deck";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/Filtres";
import "./styles/_app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="main-section">
        <div id="intro-filtres-box">
          <Intro />
          <br />
          <Filtres />
        </div>
        <Deck />
      </section>
    </div>
  );
}

export default App;

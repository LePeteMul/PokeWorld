import Header from "./components/Header";
import Intro from "./components/Intro";
import Filtres from "./components/Filtres";
import Deck from "./components/Deck/Deck";
import "./styles/_app.scss";
/* import { useEffect } from "react"; */

function App() {
  return (
    <div>
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

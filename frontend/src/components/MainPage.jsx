import Deck from "./Deck/Deck";
import Header from "./Header";
import Intro from "./Intro";
import Filtres from "./Filtres";
/* import { useEffect } from "react"; */

function MainPage() {
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

export default MainPage;

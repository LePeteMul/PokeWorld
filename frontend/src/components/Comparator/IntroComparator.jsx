import React from "react";
import { Link } from "react-router-dom";
import "../../styles/MyDeck/_introMyDeck.scss";

function IntroComparator() {
  return (
    <div className="IntroMyDeck ">
      <div className="intro-box">
        <h1 className="intro-title">Welcome the PokeWorld Comparator!</h1>
        <br />
        <p>
          Here you can compare Pokemon based on their stats and make the best
          decision when building your team.
          <br />
          <br />
          Ready to become the ultimate
          <span className="bold"> Pokemon trainer</span>?!
        </p>
      </div>
      <div>
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/AppPokeworld">Home</Link>
            </li>
            <li>
              <Link to="/MyDeck">My Deck</Link>
            </li>
            <li>
              <Link to="/Comparator">Comparator</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default IntroComparator;

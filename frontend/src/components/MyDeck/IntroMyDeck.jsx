import React from "react";
import "../../styles/MyDeck/_introMyDeck.scss";
import { Link } from "react-router-dom";

function IntroMyDeck() {
  return (
    <div className="IntroMyDeck">
      <div className="intro-box">
        <h1 className="intro-title">Welcome to your customized Deck!</h1>
        <br />
        <p>
          Discover and unlock the full potential of your Pokemon Cards. <br />
          <br />
          With your personalized deck, you're ready to take on any opponents and
          become a true <span className="bold">Pokemon master</span>.
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
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default IntroMyDeck;

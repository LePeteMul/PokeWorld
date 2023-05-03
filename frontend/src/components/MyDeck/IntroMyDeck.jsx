import React from "react";
import "../../styles/MyDeck/_introMyDeck.scss";

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
    </div>
  );
}

export default IntroMyDeck;

import React from "react";

import SearchBar from "./SearchBar";
import DeckList from "./DeckList";
import "../styles/_deck.scss";

function Deck() {
  return (
    <div className="Deck">
      <div className="deckList">
        <SearchBar />
        <DeckList />
      </div>
    </div>
  );
}

export default Deck;

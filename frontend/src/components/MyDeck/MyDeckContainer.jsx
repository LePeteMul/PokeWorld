import React from "react";
import PropTypes from "prop-types";
import "../../styles/MyDeck/_myDeckContainer.scss";
import FavCard from "./FavCard";

function MyDeckContainer({ favPokemon }) {
  return (
    <div className="MyDeckContainer">
      <div className="favPokeList">
        {favPokemon.map((poke) => (
          <div key={poke.data.id} className="cardFav">
            <FavCard index={poke.data.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

MyDeckContainer.propTypes = {
  favPokemon: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default MyDeckContainer;

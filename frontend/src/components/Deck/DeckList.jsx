import React, { useState } from "react";
import PropTypes from "prop-types";
import Cards from "../Cards";

export default function DeckList({ name, image, id }) {
  const [isShown, setIsShown] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleClickCardShown = () => {
    setIsShown((current) => !current);
  };

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="DeckList">
      <div
        id="favorite"
        onClick={handleClickFavorite}
        role="presentation"
        className={favorite ? "isFavorite" : "notFavorite"}
      />
      <button
        onClick={handleClickCardShown}
        type="button"
        className="poke-container"
        key={id}
      >
        <img className="img-button" src={image} alt={name} /> <br />
      </button>
      {isShown && <Cards index={id} setIsShown={setIsShown} />}
      <p className="pokeName">{name}</p>
    </div>
  );
}

DeckList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

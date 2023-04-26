import { useState } from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Cards from "../Cards";

export default function DeckList({ name, image, id }) {
  const [isShown, setIsShown] = useState(false);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("is-fav")) !== null
      ? JSON.parse(localStorage.getItem("is-fav")).includes(id)
      : false
  );

  const handleClickCardShown = () => {
    setIsShown((current) => !current);
  };

  const handleClickFavorite = () => {
    if (!Array.isArray(JSON.parse(localStorage.getItem("is-fav")))) {
      localStorage.setItem("is-fav", JSON.stringify([]));
    }

    if (favorite) {
      const actualFavorites = JSON.parse(localStorage.getItem("is-fav"));
      const index = actualFavorites.findIndex((pokemon) => pokemon === id);
      actualFavorites.splice(index);
      localStorage.setItem("is-fav", JSON.stringify(actualFavorites));
    } else {
      const actualFavorites = JSON.parse(localStorage.getItem("is-fav"));
      actualFavorites.push(id);
      localStorage.setItem("is-fav", JSON.stringify(actualFavorites));
    }
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

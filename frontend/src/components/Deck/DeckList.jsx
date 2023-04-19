import React, { useState } from "react";
import PropTypes from "prop-types";
import Cards from "../Cards";

export default function DeckList({ name, image, id }) {
  const [isShown, setIsShown] = useState(false);

  const handleClickCardShown = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="DeckList">
      <button
        onClick={handleClickCardShown}
        type="button"
        className="poke-container"
        key={id}
      >
        <img className="img-button" src={image} alt={name} /> <br />
      </button>
      {isShown && <Cards index={id} />}
      <p className="pokeName">{name}</p>
    </div>
  );
}

DeckList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

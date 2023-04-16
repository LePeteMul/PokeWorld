import React from "react";
import PropTypes from "prop-types";

export default function DeckList({ name, image }) {
  /*   const [isShown, setIsShown] = useState(false);

  const handleClickCardShown = () => {
    setIsShown((current) => !current);
  }; */

  return (
    <div className="DeckList">
      <img src={image} alt={name} /> <br />
      {name}
      {/*    <button onClick={handleClickCardShown} type="button">
        <img src={image} alt={name} />
      </button>
      {isShown && <Cards />} */}
    </div>
  );
}

DeckList.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

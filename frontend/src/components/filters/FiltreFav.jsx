import React from "react";
import PropTypes from "prop-types";

function FiltreFav({ isClicked, setIsClicked }) {
  const handleClickIsFav = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <input
        id="fav-input"
        type="checkbox"
        checked={isClicked}
        onClick={handleClickIsFav}
      />
      <label htmlFor="fav-input">Favorites</label>
    </div>
  );
}

FiltreFav.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};

export default FiltreFav;

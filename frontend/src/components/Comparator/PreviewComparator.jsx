import React from "react";
import PropTypes from "prop-types";

function PreviewComparator({ pokemon1, pokemon2 }) {
  return (
    <div className="preview">
      <div>
        <h4>Name</h4>
        <h4>Height</h4>
        <br />
        <h4>Sprite</h4>
        <br />
        <h4>Hp</h4>
        <h4>Attack</h4>
        <h4>Defense</h4>
        <h4>S-Attack</h4>
        <h4>S-Defense</h4>
        <h4>Speed</h4>
      </div>
      <div>
        <h4>{pokemon1.name}</h4>
      </div>
      <div>
        <h4>{pokemon2.name}</h4>
      </div>
    </div>
  );
}

PreviewComparator.propTypes = {
  pokemon1: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  pokemon2: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default PreviewComparator;

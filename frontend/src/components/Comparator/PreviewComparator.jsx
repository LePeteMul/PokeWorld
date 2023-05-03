import React from "react";
import PropTypes from "prop-types";

function PreviewComparator({ pokemon1, pokemon2 }) {
  return (
    <div className="preview">
      <div>
        <h4>Sprite</h4>
        <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
        <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
        <h4>Name</h4>
        <div>{pokemon1.name}</div>
        <div>{pokemon2.name}</div>
        <h4>Height</h4>
        <div>{pokemon1.height}</div>
        <div>{pokemon2.height}</div>
        <br />
        <h4>Hp</h4>
        <div>{pokemon1.stats[0].base_stat}</div>
        <div>{pokemon2.stats[0].base_stat}</div>
        <h4>Attack</h4>
        <div>{pokemon1.stats[1].base_stat}</div>
        <div>{pokemon2.stats[1].base_stat}</div>
        <h4>Defense</h4>
        <div>{pokemon1.stats[2].base_stat}</div>
        <div>{pokemon2.stats[2].base_stat}</div>
        <h4>S-Attack</h4>
        <div>{pokemon1.stats[3].base_stat}</div>
        <div>{pokemon2.stats[3].base_stat}</div>
        <h4>S-Defense</h4>
        <div>{pokemon1.stats[4].base_stat}</div>
        <div>{pokemon2.stats[4].base_stat}</div>
        <h4>Speed</h4>
        <div>{pokemon1.stats[5].base_stat}</div>
        <div>{pokemon2.stats[5].base_stat}</div>
      </div>
    </div>
  );
}

PreviewComparator.propTypes = {
  pokemon1: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  pokemon2: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default PreviewComparator;

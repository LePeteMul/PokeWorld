import React from "react";
import PropTypes from "prop-types";
import "../../styles/Comparator/_previewComparator.scss";

function PreviewComparator({ pokemon1, pokemon2 }) {
  const compareType = (col, type1, type2) => {
    if (type1 === type2) {
      return "table blue";
    }
    if (col === 1) {
      if (
        (type1 === "fire" && ["water", "rock", "ground"].includes(type2)) ||
        (type1 === "bug" && type2 === "fire") ||
        (type1 === "dragon" && ["fairy", "ice"].includes(type2)) ||
        (type1 === "electric" && ["dragon", "ground"].includes(type2)) ||
        (type1 === "fairy" && type2 === "poison") ||
        (type1 === "fighting" && ["fairy", "psychic"].includes(type2)) ||
        (type1 === "grass" &&
          ["fire", "ice", "poison", "bug"].includes(type2)) ||
        (type1 === "ground" && ["water", "grass", "ice"].includes(type2)) ||
        (type1 === "ice" && ["fighting", "fire", "rock"].includes(type2)) ||
        (type1 === "normal" && type2 === "fighting") ||
        (type1 === "poison" && ["ground", "psychic"].includes(type2)) ||
        (type1 === "psychic" && ["bug", "ghost"].includes(type2)) ||
        (type1 === "rock" &&
          ["fighting", "water", "grass", "ground"].includes(type2)) ||
        (type1 === "water" && ["electric", "grass"].includes(type2))
      ) {
        return "table red";
      }
      if (
        (type1 === "fire" &&
          ["water", "rock", "ground", "ice", "bug", "grass"].indexOf(type2)) ||
        (type1 === "bug" && ["fire", "grass", "psychic"].indexOf(type2)) ||
        (type1 === "dragon" && ["fairy", "ice", "electric"].indexOf(type2)) ||
        (type1 === "electric" &&
          ["dragon", "ground", "water"].indexOf(type2)) ||
        (type1 === "fairy" &&
          ["poison", "fighting", "dragon"].indexOf(type2)) ||
        (type1 === "fighting" &&
          ["fairy", "psychic", "ice", "normal", "rock"].indexOf(type2)) ||
        (type1 === "grass" &&
          ["fire", "ice", "poison", "bug", "water", "ground", "rock"].indexOf(
            type2
          )) ||
        (type1 === "ground" &&
          [
            "water",
            "grass",
            "ice",
            "electric",
            "fire",
            "poison",
            "rock",
          ].indexOf(type2)) ||
        (type1 === "ice" &&
          ["fighting", "fire", "rock", "dragon", "grass", "ground"].indexOf(
            type2
          )) ||
        (type1 === "normal" && type2 !== "fighting") ||
        (type1 === "poison" &&
          ["ground", "psychic", "fairy", "grass"].indexOf(type2)) ||
        (type1 === "psychic" &&
          ["bug", "ghost", "fighting", "poison"].indexOf(type2)) ||
        (type1 === "rock" &&
          ["fighting", "water", "grass", "ground", "fire", "ice"].indexOf(
            type2
          )) ||
        (type1 === "water" &&
          ["electric", "grass", "fire", "ground", "rock"].indexOf(type2))
      ) {
        return "table blue";
      }
      return "table green";
    }
    if (
      (type1 === "fire" && ["water", "rock", "ground"].includes(type2)) ||
      (type1 === "bug" && type2 === "fire") ||
      (type1 === "dragon" && ["fairy", "ice"].includes(type2)) ||
      (type1 === "electric" && ["dragon", "ground"].includes(type2)) ||
      (type1 === "fairy" && type2 === "poison") ||
      (type1 === "fighting" && ["fairy", "psychic"].includes(type2)) ||
      (type1 === "grass" && ["fire", "ice", "poison", "bug"].includes(type2)) ||
      (type1 === "ground" && ["water", "grass", "ice"].includes(type2)) ||
      (type1 === "ice" && ["fighting", "fire", "rock"].includes(type2)) ||
      (type1 === "normal" && type2 === "fighting") ||
      (type1 === "poison" && ["ground", "psychic"].includes(type2)) ||
      (type1 === "psychic" && ["bug", "ghost"].includes(type2)) ||
      (type1 === "rock" &&
        ["fighting", "water", "grass", "ground"].includes(type2)) ||
      (type1 === "water" && ["electric", "grass"].includes(type2))
    ) {
      return "table green";
    }
    if (
      (type1 === "fire" &&
        ["water", "rock", "ground", "ice", "bug", "grass"].indexOf(type2)) ||
      (type1 === "bug" && ["fire", "grass", "psychic"].indexOf(type2)) ||
      (type1 === "dragon" && ["fairy", "ice", "electric"].indexOf(type2)) ||
      (type1 === "electric" && ["dragon", "ground", "water"].indexOf(type2)) ||
      (type1 === "fairy" && ["poison", "fighting", "dragon"].indexOf(type2)) ||
      (type1 === "fighting" &&
        ["fairy", "psychic", "ice", "normal", "rock"].indexOf(type2)) ||
      (type1 === "grass" &&
        ["fire", "ice", "poison", "bug", "water", "ground", "rock"].indexOf(
          type2
        )) ||
      (type1 === "ground" &&
        ["water", "grass", "ice", "electric", "fire", "poison", "rock"].indexOf(
          type2
        )) ||
      (type1 === "ice" &&
        ["fighting", "fire", "rock", "dragon", "grass", "ground"].indexOf(
          type2
        )) ||
      (type1 === "normal" && type2 !== "fighting") ||
      (type1 === "poison" &&
        ["ground", "psychic", "fairy", "grass"].indexOf(type2)) ||
      (type1 === "psychic" &&
        ["bug", "ghost", "fighting", "poison"].indexOf(type2)) ||
      (type1 === "rock" &&
        ["fighting", "water", "grass", "ground", "fire", "ice"].indexOf(
          type2
        )) ||
      (type1 === "water" &&
        ["electric", "grass", "fire", "ground", "rock"].indexOf(type2))
    ) {
      return "table blue";
    }
    return "table red";
  };

  const setBackground = (col, donnee1, donnee2) => {
    if (donnee1 === donnee2) {
      return "table blue";
    }
    if (col === 1) {
      if (donnee1 > donnee2) {
        return "table green";
      }
      return "table red";
    }
    if (donnee1 > donnee2) {
      return "table red";
    }
    return "table green";
  };
  return (
    <div className="global-preview">
      <div className="preview">
        <div className="sprites-comparator">
          <h4 className="table1">Sprites</h4>
          <img
            className="table-img"
            src={pokemon1.sprites.front_default}
            alt={pokemon1.name}
          />
          <img
            className="table-img"
            src={pokemon2.sprites.front_default}
            alt={pokemon2.name}
          />
        </div>
        <div className="name-comparator">
          <h4 className="table1">Name</h4>
          <div className="table">{pokemon1.name}</div>
          <div className="table">{pokemon2.name}</div>
        </div>
        <div className="type-comparator">
          <h4 className="table1">Type</h4>
          <div
            className={compareType(
              1,
              pokemon1.types[0].type.name,
              pokemon2.types[0].type.name
            )}
          >
            {pokemon1.types[0].type.name}
          </div>
          <div
            className={compareType(
              2,
              pokemon1.types[0].type.name,
              pokemon2.types[0].type.name
            )}
          >
            {pokemon2.types[0].type.name}
          </div>
        </div>
        <div className="height-comparator">
          <h4 className="table1">Height</h4>
          <div className={setBackground(1, pokemon1.height, pokemon2.height)}>
            {pokemon1.height / 10}m
          </div>
          <div className={setBackground(2, pokemon1.height, pokemon2.height)}>
            {pokemon2.height / 10}m
          </div>
        </div>
        <div className="weight-comparator">
          <h4 className="table1">Weight</h4>
          <div className={setBackground(1, pokemon1.weight, pokemon2.weight)}>
            {pokemon1.weight / 10}kg
          </div>
          <div className={setBackground(2, pokemon1.weight, pokemon2.weight)}>
            {pokemon2.weight / 10}kg
          </div>
        </div>
        <div className="hp-comparator">
          <h4 className="table1">Hp</h4>
          <div
            className={setBackground(
              1,
              pokemon1.stats[0].base_stat,
              pokemon2.stats[0].base_stat
            )}
          >
            {pokemon1.stats[0].base_stat}
          </div>
          <div
            className={setBackground(
              2,
              pokemon1.stats[0].base_stat,
              pokemon2.stats[0].base_stat
            )}
          >
            {pokemon2.stats[0].base_stat}
          </div>
        </div>
        <div className="attack-comparator">
          <h4 className="table1">Attack</h4>
          <div
            className={setBackground(
              1,
              pokemon1.stats[1].base_stat,
              pokemon2.stats[1].base_stat
            )}
          >
            {pokemon1.stats[1].base_stat}
          </div>
          <div
            className={setBackground(
              2,
              pokemon1.stats[1].base_stat,
              pokemon2.stats[1].base_stat
            )}
          >
            {pokemon2.stats[1].base_stat}
          </div>
        </div>
        <div className="defense-comparator">
          <h4 className="table1">Defense</h4>
          <div
            className={setBackground(
              1,
              pokemon1.stats[2].base_stat,
              pokemon2.stats[2].base_stat
            )}
          >
            {pokemon1.stats[2].base_stat}
          </div>
          <div
            className={setBackground(
              2,
              pokemon1.stats[2].base_stat,
              pokemon2.stats[2].base_stat
            )}
          >
            {pokemon2.stats[2].base_stat}
          </div>
        </div>
        <div className="s-attack-comparator">
          <h4 className="table1">S-Attack</h4>
          <div
            className={setBackground(
              1,
              pokemon1.stats[3].base_stat,
              pokemon2.stats[3].base_stat
            )}
          >
            {pokemon1.stats[3].base_stat}
          </div>
          <div
            className={setBackground(
              2,
              pokemon1.stats[3].base_stat,
              pokemon2.stats[3].base_stat
            )}
          >
            {pokemon2.stats[3].base_stat}
          </div>
        </div>
        <div className="s-defense-comparator">
          <h4 className="table1">S-Defense</h4>
          <div
            className={setBackground(
              1,
              pokemon1.stats[4].base_stat,
              pokemon2.stats[4].base_stat
            )}
          >
            {pokemon1.stats[4].base_stat}
          </div>
          <div
            className={setBackground(
              2,
              pokemon1.stats[4].base_stat,
              pokemon2.stats[4].base_stat
            )}
          >
            {pokemon2.stats[4].base_stat}
          </div>
        </div>
        <div className="speed-comparator">
          <h4 className="table1">Speed</h4>
          <div
            className={setBackground(
              1,
              pokemon1.stats[5].base_stat,
              pokemon2.stats[5].base_stat
            )}
          >
            {pokemon1.stats[5].base_stat}
          </div>
          <div
            className={setBackground(
              2,
              pokemon1.stats[5].base_stat,
              pokemon2.stats[5].base_stat
            )}
          >
            {pokemon2.stats[5].base_stat}
          </div>
        </div>
      </div>
    </div>
  );
}

PreviewComparator.propTypes = {
  pokemon1: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  pokemon2: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default PreviewComparator;

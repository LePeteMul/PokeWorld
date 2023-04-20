import React from "react";
import PropTypes from "prop-types";
import FiltreType from "./FiltreType";
import FiltrePoids from "./FiltrePoids";
import FiltreTaille from "./FiltreTaille";
import FiltreFav from "./FiltreFav";

function Filtres({ pokemon, selectedType, setSelectedType, typesList }) {
  return (
    <div className="filtres-box">
      <br />
      <FiltreType
        pokemon={pokemon}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        typesList={typesList}
      />
      <br />
      <FiltrePoids />
      <br />
      <FiltreTaille />
      <br />
      <FiltreFav />
      <br />
    </div>
  );
}

Filtres.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  selectedType: PropTypes.string.isRequired,
  setSelectedType: PropTypes.func.isRequired,
  typesList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default Filtres;

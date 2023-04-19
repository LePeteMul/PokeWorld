// import React, { useState } from "react";

function FiltreType() {
  // const [selectedType, setSelectedType] = useState("all");

  // const handleTypeChange = (event) => {
  //  setSelectedType(event.target.value);
  // };

  const typesList = [
    "bug",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "water",
  ];

  // const [selectedType, setSelectedType] = useState(typesList[0]);

  const getFilteredPokemon = () => {};

  // const typeSelected = () => {
  //  .filter(() => {})
  // }

  return (
    <div>
      <select className="filtre-selector">
        <option value="all">Types</option>
        {typesList.map((element) => {
          return (
            <option key={element} value={element} onClick={getFilteredPokemon}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FiltreType;

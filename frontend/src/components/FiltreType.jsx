import React, { useState } from "react";
import { pokedata } from "./pokedata";

function FiltreType() {
  const [selectedType, setSelectedType] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredData =
    selectedType === "all"
      ? pokedata
      : pokedata.filter((pokemon) => pokemon.type === selectedType);

  return (
    <div>
      <p>test entrée dans FiltreType</p>
      <label htmlFor="type-select">Filter by type:</label>
      <select id="type-select" value={selectedType} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="electro">Electro</option>
        <option value="hydro">Hydro</option>
        <option value="pyro">Pyro</option>
      </select>
      <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FiltreType;

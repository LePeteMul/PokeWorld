import React, { useState } from "react";
// import { pokedata } from "./pokedata";

function FiltreType() {
  const [selectedType, setSelectedType] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  // const filteredData =
  //   selectedType === "all"
  //     ? pokedata
  //     : pokedata.filter((pokemon) => pokemon.type === selectedType);

  return (
    <div>
      <h1>Filtrer mes pokémons</h1>
      <label htmlFor="type-select">Type:</label>
      <select id="type-select" value={selectedType} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="electro">Electro</option>
        <option value="hydro">Hydro</option>
        <option value="pyro">Pyro</option>
      </select>
      {/* <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.type})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default FiltreType;

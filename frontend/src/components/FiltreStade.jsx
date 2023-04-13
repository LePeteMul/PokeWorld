import React, { useState } from "react";
// import { pokedata } from "./pokedata";

function FiltreStade() {
  const [selectedStade, setSelectedStade] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedStade(event.target.value);
  };

  // const filteredData =
  //   selectedStade === "all"
  //     ? pokedata
  //     : pokedata.filter((pokemon) => pokemon.stade === selectedStade);

  return (
    <div>
      <label htmlFor="stade-select">Stade:</label>
      <select
        id="stade-select"
        value={selectedStade}
        onChange={handleTypeChange}
      >
        <option value="all">All</option>
        <option value="base">base</option>
        <option value="stade 1">stade 1</option>
        <option value="stade 2">stade 2</option>
      </select>
      {/* <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.stade})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default FiltreStade;

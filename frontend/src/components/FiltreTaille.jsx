import React, { useState } from "react";
// import { pokedata } from "./pokedata";

function FiltreTaille() {
  const [selectedTaille, setSelectedTaille] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedTaille(event.target.value);
  };

  // const filteredData =
  //   selectedTaille === "all"
  //     ? pokedata
  //     : pokedata.filter((pokemon) => pokemon.taille === selectedTaille);

  return (
    <div>
      <label htmlFor="taille-select">Taille:</label>
      <select
        id="taille-select"
        value={selectedTaille}
        onChange={handleTypeChange}
      >
        <option value="all">All</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="big">big</option>
      </select>
      {/* <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.taille})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default FiltreTaille;

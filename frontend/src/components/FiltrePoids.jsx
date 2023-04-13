import React, { useState } from "react";
// import { pokedata } from "./pokedata";

function FiltrePoids() {
  const [selectedPoids, setSelectedPoids] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedPoids(event.target.value);
  };

  // const filteredData =
  //   selectedPoids === "all"
  //     ? pokedata
  //     : pokedata.filter((pokemon) => pokemon.poids === selectedPoids);

  return (
    <div>
      <label htmlFor="poids-select">Poids:</label>
      <select
        id="poids-select"
        value={selectedPoids}
        onChange={handleTypeChange}
      >
        <option value="all">All</option>
        <option value="light">light</option>
        <option value="medium">medium</option>
        <option value="heavy">heavy</option>
      </select>
      {/* <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.poids})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default FiltrePoids;

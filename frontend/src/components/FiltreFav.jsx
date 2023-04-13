import React, { useState } from "react";
// import { pokedata } from "./pokedata";

function FiltreFav() {
  const [selectedFavoris, setSelectedFavoris] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedFavoris(event.target.value);
  };

  // const filteredData =
  //   selectedFavoris === "all"
  //     ? pokedata
  //     : pokedata.filter((pokemon) => pokemon.favoris === selectedFavoris);

  return (
    <div>
      <label htmlFor="favoris-select">Favoris:</label>
      <select
        id="favoris-select"
        value={selectedFavoris}
        onChange={handleTypeChange}
      >
        <option value="all">All</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      {/* <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.favoris})
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default FiltreFav;

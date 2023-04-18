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
      <select
        className="filtre-selector"
        value={selectedType}
        onChange={handleTypeChange}
      >
        <option value="all">Type...</option>
        <option value="electro">Electrik</option>
        <option value="hydro">Water</option>
        <option value="pyro">Fire</option>
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

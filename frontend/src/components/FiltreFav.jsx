import React, { useState } from "react";

function FiltreFav() {
  const [selectedFavoris, setSelectedFavoris] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedFavoris(event.target.value);
  };

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
    </div>
  );
}

export default FiltreFav;

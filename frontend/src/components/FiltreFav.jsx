import React, { useState } from "react";

function FiltreFav() {
  const [selectedFavoris, setSelectedFavoris] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedFavoris(event.target.value);
  };

  return (
    <div className="filtre-selector">
      <select
        className="filtre-selector"
        value={selectedFavoris}
        onChange={handleTypeChange}
      >
        <option value="all">Favorite...</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  );
}

export default FiltreFav;

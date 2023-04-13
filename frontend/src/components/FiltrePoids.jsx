import React, { useState } from "react";

function FiltrePoids() {
  const [selectedPoids, setSelectedPoids] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedPoids(event.target.value);
  };

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
    </div>
  );
}

export default FiltrePoids;

import React, { useState } from "react";

function FiltrePoids() {
  const [selectedPoids, setSelectedPoids] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedPoids(event.target.value);
  };

  return (
    <div>
      <select
        className="filtre-selector"
        value={selectedPoids}
        onChange={handleTypeChange}
      >
        <option value="all">Poids...</option>
        <option value="light">light</option>
        <option value="medium">medium</option>
        <option value="heavy">heavy</option>
      </select>
    </div>
  );
}

export default FiltrePoids;

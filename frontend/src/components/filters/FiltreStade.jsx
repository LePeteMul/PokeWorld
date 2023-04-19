import React, { useState } from "react";

function FiltreStade() {
  const [selectedStade, setSelectedStade] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedStade(event.target.value);
  };

  return (
    <div>
      <select
        className="filtre-selector"
        value={selectedStade}
        onChange={handleTypeChange}
      >
        <option value="all">Stade...</option>
        <option value="base">base</option>
        <option value="stade 1">stade 1</option>
        <option value="stade 2">stade 2</option>
      </select>
    </div>
  );
}

export default FiltreStade;

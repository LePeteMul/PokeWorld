import React, { useState } from "react";

function FiltreTaille() {
  const [selectedTaille, setSelectedTaille] = useState("all");

  const handleTypeChange = (event) => {
    setSelectedTaille(event.target.value);
  };

  return (
    <div>
      <select
        className="filtre-selector"
        value={selectedTaille}
        onChange={handleTypeChange}
      >
        <option value="all">Height...</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="big">big</option>
      </select>
    </div>
  );
}

export default FiltreTaille;

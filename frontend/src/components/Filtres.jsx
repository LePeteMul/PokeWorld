import React from "react";
import FiltreType from "./FiltreType";
import FiltreStade from "./FiltreStade";
import FiltrePoids from "./FiltrePoids";
import FiltreTaille from "./FiltreTaille";
import FiltreFav from "./FiltreFav";

function Filtres() {
  return (
    <div>
      <FiltreType />
      <FiltreStade />
      <FiltrePoids />
      <FiltreTaille />
      <FiltreFav />
    </div>
  );
}

export default Filtres;

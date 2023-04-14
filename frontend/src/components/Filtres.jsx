import React from "react";
import FiltreType from "./FiltreType";
import FiltreStade from "./FiltreStade";
import FiltrePoids from "./FiltrePoids";
import FiltreTaille from "./FiltreTaille";
import FiltreFav from "./FiltreFav";

function Filtres() {
  return (
    <div className="filtres-box">
      <h3 className="filtres-title">Filtrer</h3>
      <br />
      <FiltreType />
      <br />
      <FiltreStade />
      <br />
      <FiltrePoids />
      <br />
      <FiltreTaille />
      <br />
      <FiltreFav />
      <br />
    </div>
  );
}

export default Filtres;

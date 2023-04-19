import React from "react";
import FiltreType from "./FiltreType";
import FiltrePoids from "./FiltrePoids";
import FiltreTaille from "./FiltreTaille";
import FiltreFav from "./FiltreFav";

function Filtres() {
  return (
    <div className="filtres-box">
      <br />
      <FiltreType />
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

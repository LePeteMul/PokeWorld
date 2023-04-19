import React from "react";
import LoadingImgCTop from "../assets/pokeball_Top.png";
import LoadingImgCBottom from "../assets/pokeball_Bottom.png";
import LoadingImgL from "../assets/sacha.png";
import LoadingImgR from "../assets/pikachu-loading.png";
import Pokemon from "../assets/pokemon-logo-1.png";
import "../styles/_loadingPage.scss";

function LoadingPage() {
  return (
    <div className="LoadingPage">
      <div className="title">
        <img id="pokemon" src={Pokemon} alt="pokemon" />
      </div>

      <div className="Caracters">
        <img className="sacha" src={LoadingImgL} alt="Sacha" />

        <div className="pokeballAnim">
          <img id="pokeball-top" src={LoadingImgCTop} alt="pokeball-Top" />
          <img
            id="pokeball-bottom"
            src={LoadingImgCBottom}
            alt="pokeball-Bottom"
          />
        </div>

        <img className="pikachu" src={LoadingImgR} alt="Pikachu" />
      </div>

      <div className="catch">Enter the Pokeworld </div>
    </div>
  );
}

export default LoadingPage;

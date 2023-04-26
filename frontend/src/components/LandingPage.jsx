import React from "react";
import { Link } from "react-router-dom";
import "../styles/_landingPage.scss";
import LoadingImgC from "../assets/images/pokeball_pix.png";
import LoadingImgL from "../assets/images/sacha.png";
import LoadingImgR from "../assets/images/pikachu-loading.png";
import Pokemon from "../assets/images/pokemon-logo-1.png";

function LandingPage() {
  return (
    <div className="LoadingPage">
      <div className="title">
        <img className="pokemon" src={Pokemon} alt="pokemon" />
      </div>
      <div className="Caracters">
        <img className="sacha" src={LoadingImgL} alt="Sacha" />
        <Link to="/AppPokeworld">
          <div className="pokeballAnim">
            <img className="pokeball" src={LoadingImgC} alt="pokeball" />
          </div>
        </Link>

        <img className="pikachu" src={LoadingImgR} alt="Pikachu" />
      </div>
      <div className="catch">
        <p className="enter">Enter the Pokeworld </p>
      </div>
    </div>
  );
}

export default LandingPage;

import React from "react";
import headerImgL from "../assets/pikachu_pix.gif";
import headerImgC from "../assets/pokemon-logo-1.png";
import headerImgR from "../assets/pokeball_pix.png";

function Header() {
  return (
    <div id="header">
      <div id="gifs">
        <img id="pika" src={headerImgL} alt="gif" />
      </div>
      <img id="logo" src={headerImgC} alt="logo-pokemon" />
      <img
        className="rotate-center"
        id="pokeball"
        src={headerImgR}
        alt="pokeball"
      />
    </div>
  );
}

export default Header;

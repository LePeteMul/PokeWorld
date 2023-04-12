import React from "react";

function Intro() {

  return (
    <div className="intro-box">
      <h1 className="intro-title">Bienvenue sur PokeWorld !</h1>
      <br />
      <p>
        Ici, tu peux <span className="intro-bold-words">chercher</span>,{" "}
        <span className="intro-bold-words">comparer</span> et (bientôt) faire{" "}
        <span className="intro-bold-words">combattre</span> tes pokemon 1ère
        génération préférés !
      </p>
    </div>
  );
}

export default Intro;

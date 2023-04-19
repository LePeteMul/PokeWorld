import React from "react";

function Intro() {
  return (
    <div className="intro-box">
      <h1 className="intro-title">Welcome to PokeWorld !</h1>
      <br />
      <p>
        Here, you can <span className="intro-bold-words">search</span>,{" "}
        <span className="intro-bold-words">compare</span> and (soon) make{" "}
        <span className="intro-bold-words">battle</span> with your favorite
        first generation pokemon !
      </p>
    </div>
  );
}

export default Intro;

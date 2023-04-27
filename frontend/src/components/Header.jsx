import React, { useState } from "react";
import headerImgL from "../assets/images/pikachu_pix.gif";
import headerImgC from "../assets/images/pokemon-logo-1.png";
import headerImgR from "../assets/images/pokeball_pix.png";
import audio from "../assets/audio/titlescreen.mp3";
import speakerMuted from "../assets/images/speaker-mute.png";
import speaker from "../assets/images/speaker.png";

function Header({ test, setTest }) {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleTest = () => {
    setTest(!test);
  };

  const handleToggleMute = () => {
    setIsMuted((current) => !current);
  };
  return (
    <div id="header">
      <div id="gifs">
        <img id="pika" src={headerImgL} alt="gif" />
      </div>
      <audio src={audio} loop autoPlay muted={isMuted}>
        <track kind="captions" />
      </audio>
      <button
        className="speaker-button"
        type="button"
        onClick={handleToggleMute}
      >
        {isMuted ? (
          <img className="speaker-img" src={speakerMuted} alt="" />
        ) : (
          <img className="speaker-img" src={speaker} alt="" />
        )}
      </button>

      <img id="logo" src={headerImgC} alt="logo-pokemon" />
      <button onClick={handleToggleTest} type="button" className="togglebutton">
        Sélecteur / Comparateur{" "}
      </button>
      <img
        className="rotate-center"
        id="pokeball"
        src={headerImgR}
        alt="pokeball"
      />
    </div>
  );
}

Header.propTypes = {
  setTest: PropTypes.bool.isRequired,
  test: PropTypes.string.isRequired,
};

export default Header;

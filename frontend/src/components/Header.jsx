import React, { useState } from "react";
import headerImgL from "../assets/pikachu_pix.gif";
import headerImgC from "../assets/pokemon-logo-1.png";
import headerImgR from "../assets/pokeball_pix.png";
import audio from "../assets/audio/titlescreen.mp3";
import speakerMuted from "../assets/speaker-mute.png";
import speaker from "../assets/speaker.png";

function Header() {
  const [isMuted, setIsMuted] = useState(true);

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

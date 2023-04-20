import React, { useState } from "react";
import audio from "../assets/audio/titlescreen.mp3";
import speakerMuted from "../assets/speaker-mute.png";
import speaker from "../assets/speaker.png";

function Intro() {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    setIsMuted((current) => !current);
  };

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
      <br />
      <audio src={audio} loop autoPlay muted={isMuted}>
        <track kind="captions" />
      </audio>
      <button type="button" onClick={handleToggleMute}>
        {isMuted ? (
          <img className="speaker" src={speakerMuted} alt="" />
        ) : (
          <img className="speaker" src={speaker} alt="" />
        )}
      </button>
    </div>
  );
}

export default Intro;

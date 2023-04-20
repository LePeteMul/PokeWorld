import React, { useState } from "react";
import audio from "../assets/audio/titlescreen.mp3";
import speakerMuted from "../assets/speaker-mute.svg";
import speaker from "../assets/speaker.svg";

function Intro() {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    if (muted) {
      setMuted(false);
    } else {
      setMuted(true);
    }
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
      <audio src={audio} loop autoPlay>
        <track kind="captions" />
      </audio>
      <button type="button" onClick={toggleMute}>
        {muted ? (
          <img src={speakerMuted} alt="" />
        ) : (
          <img src={speaker} alt="" />
        )}
      </button>
    </div>
  );
}

export default Intro;

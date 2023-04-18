import React, { useState } from "react";
import audio from "../assets/audio/titlescreen.mp3";
import unmute from "../assets/speaker.svg";
import mute from "../assets/speaker-mute.svg";

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
        Here, you can <span className="intro-bold-words">check</span>,{" "}
        <span className="intro-bold-words">compare</span> and (soon){" "}
        <span className="intro-bold-words">battle</span> your favorite first
        generation pokemon !
      </p>
      <audio id="audio-box" src={audio} loop autoPlay muted={muted}>
        <track kind="captions" default srcLang="en" src="" />
      </audio>
      <br />
      <button
        className="mute-button"
        onClick={() => toggleMute(muted)}
        type="button"
      >
        {muted ? (
          <img className="speaker-mute" src={mute} alt="" />
        ) : (
          <img className="speaker" src={unmute} alt="" />
        )}
      </button>
    </div>
  );
}

export default Intro;

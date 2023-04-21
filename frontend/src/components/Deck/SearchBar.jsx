import React, { useState } from "react";
import "../../styles/_searchbar.scss";
import PropTypes from "prop-types";
import audio from "../../assets/audio/titlescreen.mp3";
import speakerMuted from "../../assets/speaker-mute.png";
import speaker from "../../assets/speaker.png";

function SearchBar({ handleSearchChange }) {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    setIsMuted((current) => !current);
  };

  return (
    <div className="SearchBar">
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
      <input
        onChange={handleSearchChange}
        id="searchbar"
        onKeyUp="search_animal()"
        type="text"
        name="search"
        placeholder="Search Pokemon..."
      />
    </div>
  );
}

SearchBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;

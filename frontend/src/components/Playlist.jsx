import { useState } from "react";
import audio1 from "../assets/audio/1-titlescreen.mp3";
import audio2 from "../assets/audio/2-pallettown.mp3";
import audio3 from "../assets/audio/3-battlewildpokemon.mp3";
import audio4 from "../assets/audio/4-pokecenter.mp3";
import audio5 from "../assets/audio/5-gym.mp3";
import audio6 from "../assets/audio/6-gymleaderbattle.mp3";
import audio7 from "../assets/audio/7-lavendertown.mp3";
import audio8 from "../assets/audio/8-pokemontower.mp3";
import audio9 from "../assets/audio/9-technosoundeffect.mp3";

function Playlist() {
  const playList = [
    {
      musicName: "Title Screen",
      musicSrc: audio1,
    },
    {
      musicName: "Pallet Town",
      musicSrc: audio2,
    },
    {
      musicName: "Battle wild Pokemon",
      musicSrc: audio3,
    },
    {
      musicName: "Pokemon Center",
      musicSrc: audio4,
    },
    {
      musicName: "Gym",
      musicSrc: audio5,
    },
    {
      musicName: "Gym Leader Battle",
      musicSrc: audio6,
    },
    {
      musicName: "Lavender Town",
      musicSrc: audio7,
    },
    {
      musicName: "Pokemon Tower",
      musicSrc: audio8,
    },
    {
      musicName: "Weird Techno",
      musicSrc: audio9,
    },
  ];

  const [selectedMusic, setSelectedMusic] = useState(audio1);

  const handleMusic = (e) => {
    setSelectedMusic(e.target.value);
  };
  return (
    <div className="landscape-gif-box">
      <audio
        className="audio-controls"
        src={selectedMusic}
        controls
        autoPlay
        muted
      >
        <track kind="captions" />
      </audio>
      {playList.map((music) => {
        return (
          <ul className="playlists">
            <li className="playlist">
              <button
                type="button"
                onClick={(e) => handleMusic(e)}
                value={music.musicSrc}
                className="playlist-button"
              >
                {music.musicName}
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Playlist;

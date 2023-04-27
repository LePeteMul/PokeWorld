import { useState } from "react";
import headerImgL from "../assets/images/pikachu_pix.gif";
import headerImgC from "../assets/images/pokemon-logo-1.png";
import headerImgR from "../assets/images/pokeball_pix.png";
import audio1 from "../assets/audio/1-titlescreen.mp3";
import audio2 from "../assets/audio/2-pallettown.mp3";
import audio3 from "../assets/audio/3-battlewildpokemon.mp3";
import audio4 from "../assets/audio/4-pokecenter.mp3";
import audio5 from "../assets/audio/5-gym.mp3";
import audio6 from "../assets/audio/6-gymleaderbattle.mp3";
import audio7 from "../assets/audio/7-lavendertown.mp3";
import audio8 from "../assets/audio/8-pokemontower.mp3";
import audio9 from "../assets/audio/9-technosoundeffect.mp3";

function Header() {
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
    <div id="header">
      <div id="gifs">
        <img id="pika" src={headerImgL} alt="gif" />
      </div>
      <div className="landscape-gif-box">
        {playList.map((music) => {
          return (
            <ul>
              <li>
                <button
                  type="button"
                  onClick={(e) => handleMusic(e)}
                  value={music.musicSrc}
                >
                  {music.musicName}
                </button>
              </li>
            </ul>
          );
        })}
        <audio src={selectedMusic} controls autoPlay muted>
          <track kind="captions" />
        </audio>
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

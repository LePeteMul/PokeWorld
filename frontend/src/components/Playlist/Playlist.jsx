import { useState } from "react";
import audio1 from "../../assets/audio/1-titlescreen.mp3";
import audio2 from "../../assets/audio/2-pallettown.mp3";
import audio3 from "../../assets/audio/3-battlewildpokemon.mp3";
import audio4 from "../../assets/audio/4-pokecenter.mp3";
import audio5 from "../../assets/audio/5-gym.mp3";
import audio6 from "../../assets/audio/6-gymleaderbattle.mp3";
import audio7 from "../../assets/audio/7-lavendertown.mp3";
import audio8 from "../../assets/audio/8-pokemontower.mp3";
import audio9 from "../../assets/audio/9-roadtoveridiancity.mp3";
import audio10 from "../../assets/audio/10-mtmoon.mp3";
import audio11 from "../../assets/audio/11-guide.mp3";
import audio12 from "../../assets/audio/12-trainerbattle.mp3";
import audio13 from "../../assets/audio/13-pewtercity.mp3";
import audio14 from "../../assets/audio/pokemonthemesong.mp3";
import background1 from "../../assets/images/pokemonlandscape.gif";
import background2 from "../../assets/images/pallettownpicture.png";
import background3 from "../../assets/images/wildpkmnappears.png";
import background4 from "../../assets/images/pokecenterbg.jpg";
import background5 from "../../assets/images/gymbg.jpg";
import background6 from "../../assets/images/gymleaderpicture.png";
import background7 from "../../assets/images/lavendertownbg.jpg";
import background8 from "../../assets/images/pokemontowerbg.jpg";
import background9 from "../../assets/images/roadtoveridianbg.jpg";
import background10 from "../../assets/images/mountmoonpicture.gif";
import background11 from "../../assets/images/guidebg.png";
import background12 from "../../assets/images/battlepicture.jpg";
import background13 from "../../assets/images/argentabg.png";
import background14 from "../../assets/images/pokemonthemesong.jpg";

function Playlist() {
  const playList = [
    {
      musicName: "Title Screen",
      musicSrc: audio1,
      musicBg: background1,
    },
    {
      musicName: "Pokemon Center",
      musicSrc: audio4,
      musicBg: background4,
    },
    {
      musicName: "Pallet Town",
      musicSrc: audio2,
      musicBg: background2,
    },
    {
      musicName: "Pewter city",
      musicSrc: audio13,
      musicBg: background13,
    },
    {
      musicName: "Wild Pokemon",
      musicSrc: audio3,
      musicBg: background3,
    },
    {
      musicName: "Trainer battle",
      musicSrc: audio12,
      musicBg: background12,
    },
    {
      musicName: "Gym",
      musicSrc: audio5,
      musicBg: background5,
    },
    {
      musicName: "Gym Leader",
      musicSrc: audio6,
      musicBg: background6,
    },
    {
      musicName: "Road",
      musicSrc: audio9,
      musicBg: background9,
    },
    {
      musicName: "Mount moon",
      musicSrc: audio10,
      musicBg: background10,
    },
    {
      musicName: "Lavender Town",
      musicSrc: audio7,
      musicBg: background7,
    },
    {
      musicName: "Pokemon Tower",
      musicSrc: audio8,
      musicBg: background8,
    },
    {
      musicName: "Guide you",
      musicSrc: audio11,
      musicBg: background11,
    },
    {
      musicName: "???",
      musicSrc: audio14,
      musicBg: background14,
    },
  ];

  const [selectedMusic, setSelectedMusic] = useState(playList[0].musicSrc);
  const [selectedBg, setSelectedBg] = useState(playList[0].musicBg);
  function handleMusic(e) {
    setSelectedMusic(e.target.value);
    setSelectedBg(e.target.name);
  }
  return (
    <div className="playlist-container">
      <div
        className="playlist-box"
        style={{ backgroundImage: `url(${selectedBg})` }}
      >
        <div>
          <h2 className="playlist-title">Choose your music :</h2>
          <ul className="playlists">
            {playList.map((music, index) => {
              return (
                <li className="playlist" key={music.id || index}>
                  <button
                    type="button"
                    onClick={(e) => handleMusic(e)}
                    name={music.musicBg}
                    value={music.musicSrc}
                    className="playlist-button"
                  >
                    {music.musicName}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <audio
        className="audio-controls"
        src={selectedMusic}
        controls
        autoPlay
        muted
      >
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default Playlist;

import headerImgL from "../assets/images/pikachu_pix.gif";
import headerImgC from "../assets/images/pokemon-logo-1.png";
import headerImgR from "../assets/images/pokeball_pix.png";
import Playlist from "./Playlist";

function Header() {
  return (
    <div id="header">
      <div id="gifs">
        <img id="pika" src={headerImgL} alt="gif" />
      </div>
      <Playlist />
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

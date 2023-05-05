import BurgerMenu from "./BurgerMenu";
import headerImgL from "../assets/images/pikachu_pix.gif";
import headerImgC from "../assets/images/pokemon-logo-1.png";

function Header() {
  return (
    <div id="header">
      <div id="gifs">
        <img id="pika" src={headerImgL} alt="gif" />
      </div>
      <img id="logo" src={headerImgC} alt="logo-pokemon" />
      <BurgerMenu />
      <div className="header-wallpaper" />
    </div>
  );
}

export default Header;

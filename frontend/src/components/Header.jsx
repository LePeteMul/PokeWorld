import PropTypes from "prop-types";
import BurgerMenu from "./BurgerMenu";
import headerImgL from "../assets/images/pikachu_pix.gif";
import headerImgC from "../assets/images/pokemon-logo-1.png";

function Header({ test, setTest }) {
  const handleToggleTest = () => {
    setTest(!test);
  };
  return (
    <div id="header">
      <div id="gifs">
        <img id="pika" src={headerImgL} alt="gif" />
      </div>
      <img id="logo" src={headerImgC} alt="logo-pokemon" />
      <button onClick={handleToggleTest} type="button" className="togglebutton">
        Sélecteur / Comparateur{" "}
      </button>
      <BurgerMenu />
      <div className="header-wallpaper" />
    </div>
  );
}

Header.propTypes = {
  setTest: PropTypes.bool.isRequired,
  test: PropTypes.string.isRequired,
};

export default Header;

import PropTypes from "prop-types";
import headerImgL from "../assets/images/pikachu_pix.gif";
import headerImgC from "../assets/images/pokemon-logo-1.png";
import headerImgR from "../assets/images/pokeball_pix.png";

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

      <img
        className="rotate-center"
        id="pokeball"
        src={headerImgR}
        alt="pokeball"
      />
      <div className="header-wallpaper" />
    </div>
  );
}

Header.propTypes = {
  setTest: PropTypes.bool.isRequired,
  test: PropTypes.string.isRequired,
};

export default Header;

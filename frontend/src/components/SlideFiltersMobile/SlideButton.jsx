import PropTypes from "prop-types";
import pokeballButton from "../../assets/images/pokeball_pix.png";

function SlideButton({ slideIsOpened, setSlideIsOpened }) {
  const toggleMenu = () => {
    setSlideIsOpened((current) => !current);
  };

  let visibility = "hide";
  if (slideIsOpened) {
    visibility = "show";
  } else {
    visibility = "hide";
  }

  return (
    <div id="pokeball-button-box" className={visibility}>
      <button type="button" onClick={toggleMenu}>
        <img
          className="pokeball-button"
          src={pokeballButton}
          alt="pokeball-button"
        />
      </button>
    </div>
  );
}

SlideButton.propTypes = {
  slideIsOpened: PropTypes.bool.isRequired,
  setSlideIsOpened: PropTypes.func.isRequired,
};

export default SlideButton;

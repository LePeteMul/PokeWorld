import PropTypes from "prop-types";
import pokeballButton from "../../assets/Bouton_pokeball.png";

function SlideButton({ slideIsOpened, setSlideIsOpened }) {
  const toggleMenu = () => {
    setSlideIsOpened((current) => !current);
    console.info(slideIsOpened);
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

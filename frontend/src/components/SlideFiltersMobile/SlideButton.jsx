import PropTypes from "prop-types";
import pokeballButton from "../../assets/Bouton_pokeball.png";

function SlideButton({ slideIsOpened, setSlideIsOpened }) {
  const toggleMenu = () => {
    setSlideIsOpened((current) => !current);
    console.info(slideIsOpened);
  };

  return (
    <div className="pokeball-button-box">
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

import PropTypes from "prop-types";
import Filtres from "../filters/Filtres";

function SlideFilters({
  slideIsOpened,
  pokemon,
  selectedHeight,
  setSelectedHeight,
  selectedPoids,
  setSelectedPoids,
  selectedType,
  setSelectedType,
  typesList,
  isClicked,
  setIsClicked,
}) {
  let visibility = "hide";
  if (slideIsOpened) {
    visibility = "show";
  } else {
    visibility = "hide";
  }
  return (
    <div id="slide-filters-shown" className={visibility}>
      <div className="slide-filters-container">
        <h2 className="slide-filtres-title">FILTRES</h2>
        <Filtres
          pokemon={pokemon}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedPoids={selectedPoids}
          setSelectedPoids={setSelectedPoids}
          typesList={typesList}
          selectedHeight={selectedHeight}
          setSelectedHeight={setSelectedHeight}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      </div>
    </div>
  );
}

SlideFilters.propTypes = {
  slideIsOpened: PropTypes.bool.isRequired,
  pokemon: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  selectedType: PropTypes.string.isRequired,
  setSelectedType: PropTypes.func.isRequired,
  selectedPoids: PropTypes.string.isRequired,
  setSelectedPoids: PropTypes.func.isRequired,
  typesList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  selectedHeight: PropTypes.string.isRequired,
  setSelectedHeight: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
  setIsClicked: PropTypes.func.isRequired,
};
export default SlideFilters;

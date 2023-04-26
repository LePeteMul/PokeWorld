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
}) {
  let visibility = "hide";
  if (slideIsOpened) {
    visibility = "show";
  } else {
    visibility = "hide";
  }
  return (
    <div id="slide-filters-box" className={visibility}>
      <Filtres
        pokemon={pokemon}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedPoids={selectedPoids}
        setSelectedPoids={setSelectedPoids}
        typesList={typesList}
        selectedHeight={selectedHeight}
        setSelectedHeight={setSelectedHeight}
      />
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
};
export default SlideFilters;

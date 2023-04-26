import PropTypes from "prop-types";
import SlideButton from "./SlideButton";

function SlideFilters({ slideIsOpened, setSlideIsOpened }) {
  return (
    <div className="slide-filters-box">
      <div className="" />
      <SlideButton
        slideIsOpened={slideIsOpened}
        setSlideIsOpened={setSlideIsOpened}
      />
    </div>
  );
}

SlideFilters.propTypes = {
  slideIsOpened: PropTypes.bool.isRequired,
  setSlideIsOpened: PropTypes.func.isRequired,
};
export default SlideFilters;

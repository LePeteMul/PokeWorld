import SlideButton from "./SlideButton";

function SlideFilters({slideIsOpened, setSlideIsOpened}) {
  return (
    <div className="slide-filters-box">
      <div>
        
      </div>
      <SlideButton
        slideIsOpened={slideIsOpened}
        setSlideIsOpened={setSlideIsOpened}
      />
   </div>
  );
}

export default SlideFilters;

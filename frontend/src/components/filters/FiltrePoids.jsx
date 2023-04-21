import PropTypes from "prop-types";

function FiltrePoids({ selectedPoids, setSelectedPoids }) {
  const handlePoidsChange = (event) => {
    setSelectedPoids(event.target.value);
  };

  return (
    <div>
      <select
        className="filtre-selector"
        value={selectedPoids}
        onChange={(event) => handlePoidsChange(event)}
      >
        <option value="">Weight : all</option>
        <option value="0-30">0-30</option>
        <option value="30-100">30-100</option>
        <option value="100 +">100 +</option>
      </select>
    </div>
  );
}

FiltrePoids.propTypes = {
  setSelectedPoids: PropTypes.func.isRequired,
  selectedPoids: PropTypes.string.isRequired,
  //  poidsList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default FiltrePoids;

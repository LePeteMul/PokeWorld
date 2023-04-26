import PropTypes from "prop-types";

function FiltrePoids({ selectedPoids, setSelectedPoids }) {
  const handlePoidsChange = (event) => {
    setSelectedPoids(event.target.value);
  };

  return (
    <div className="filtre-box">
      <select
        className="filtre-selector"
        value={selectedPoids}
        onChange={(event) => handlePoidsChange(event)}
      >
        <option value="">Weight : all</option>
        <option value="0-10kg">0-10kg</option>
        <option value="10-30kg">10-30kg</option>
        <option value="+30kg">+30kg</option>
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

import PropTypes from "prop-types";

function FiltreTaille({ selectedHeight, setSelectedHeight }) {
  const handleTypeChange = (event) => {
    setSelectedHeight(event.target.value);
  };
  return (
    <div className="filtre-box">
      <select
        className="filtre-selector"
        value={selectedHeight}
        onChange={(e) => handleTypeChange(e)}
      >
        <option value="">Height : all</option>
        <option value="0-1m">0-1m</option>
        <option value="1-2m">1-2m</option>
        <option value="+2m">+2m</option>
      </select>
    </div>
  );
}

FiltreTaille.propTypes = {
  selectedHeight: PropTypes.string.isRequired,
  setSelectedHeight: PropTypes.func.isRequired,
};

export default FiltreTaille;

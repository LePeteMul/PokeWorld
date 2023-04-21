import PropTypes from "prop-types";

function FiltreTaille({ selectedHeight, setSelectedHeight }) {
  const handleTypeChange = (event) => {
    setSelectedHeight(event.target.value);
  };
  return (
    <div>
      <select
        className="filtre-selector"
        value={selectedHeight}
        onChange={(e) => handleTypeChange(e)}
      >
        <option value="all">Height : all</option>
        <option value="0-1m">0-1m</option>
        <option value="1-5m">1-5m</option>
        <option value="+5m">+5m</option>
      </select>
    </div>
  );
}

FiltreTaille.propTypes = {
  selectedHeight: PropTypes.string.isRequired,
  setSelectedHeight: PropTypes.func.isRequired,
};

export default FiltreTaille;

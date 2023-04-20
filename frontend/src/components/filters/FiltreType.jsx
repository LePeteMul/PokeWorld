import PropTypes from "prop-types";

function FiltreType({ setSelectedType, typesList }) {
  const handleType = (e) => {
    setSelectedType(e.target.value);
  };
  return (
    <div>
      <select className="filtre-selector" onChange={(e) => handleType(e)}>
        <option value="all">Types : all</option>
        {typesList.map((element) => {
          return (
            <option key={element} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
}

FiltreType.propTypes = {
  setSelectedType: PropTypes.func.isRequired,
  typesList: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};

export default FiltreType;

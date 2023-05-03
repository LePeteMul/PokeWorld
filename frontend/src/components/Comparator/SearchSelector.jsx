import React from "react";
import "../../styles/Comparator/_searchSelector.scss";
import PropTypes from "prop-types";

function SearchSelector({ onChange1, onChange2, onSubmit, options }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="holders">
          <select className="select-search" onChange={onChange1}>
            <option value="">-- First Pokemon --</option>
            {options.map((poke) => (
              <option key={poke.id}>{poke.name}</option>
            ))}
          </select>
          <button type="submit" className="comparebtn">
            Compare
          </button>
          <select className="select-search" onChange={onChange2}>
            <option value="">-- Second Pokemon --</option>
            {options.map((poke) => (
              <option key={poke.id}>{poke.name}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

SearchSelector.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange1: PropTypes.func.isRequired,
  onChange2: PropTypes.func.isRequired,
};

export default SearchSelector;

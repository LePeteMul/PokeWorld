import React from "react";
import "../../styles/_searchbar.scss";
import PropTypes from "prop-types";

function SearchBar({ handleSearchChange }) {
  return (
    <div className="SearchBar">
      <input
        onChange={handleSearchChange}
        id="searchbar"
        onKeyUp="search_animal()"
        type="text"
        name="search"
        placeholder="Search Pokemon..."
      />
    </div>
  );
}

SearchBar.propTypes = {
  handleSearchChange: PropTypes.string.isRequired,
};

export default SearchBar;

import React from "react";
import "../../styles/_searchbar.scss";
import PropTypes from "prop-types";

function SearchBar({ handlePokemonSearch }) {
  return (
    <div className="SearchBar">
      <input
        onChange={(e) => handlePokemonSearch(e.target.value)}
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
  handlePokemonSearch: PropTypes.string.isRequired,
};

export default SearchBar;

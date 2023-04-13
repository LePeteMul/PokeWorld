import React from "react";
import "../styles/_searchbar.scss";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        id="searchbar"
        onKeyUp="search_animal()"
        type="text"
        name="search"
        placeholder="Search Pokemon..."
      />
    </div>
  );
}

export default SearchBar;

import React from "react";
import CardsCompare from "./CardsCompare";
import PropTypes from "prop-types";

function Comparator({ idCompareCard }) {
  return (
    <div id="comparator">
      <CardsCompare index={idCompareCard} />
    </div>
  );
}

Comparator.propTypes = {
  idCompareCard: PropTypes.number.isRequired,
};

export default Comparator;

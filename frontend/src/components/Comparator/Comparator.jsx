import React from "react";
import "../../styles/Comparator/_comparator.scss";
import IntroComparator from "./IntroComparator";
import Header from "../Header";
import ComparatorContainer from "./ComparatorContainer";

function Comparator() {
  return (
    <div>
      <Header />
      <div className="MyDeck">
        <IntroComparator />
        <ComparatorContainer />
      </div>
    </div>
  );
}

export default Comparator;

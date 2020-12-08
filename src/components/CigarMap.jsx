import React from "react";
import CigarList from "./CigarList";

function CigarMap(props) {
  return (
    <div className="cigar-list-container">
      <div className="header-box">
        <h2>Cigars</h2>
      </div>
      <div className="cigars-list">
        {props.cigarData.map((cigar) => (
          <CigarList cigar={cigar} key={cigar.id} />
        ))}
      </div>
    </div>
  );
}

export default CigarMap;

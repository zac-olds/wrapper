import React from "react";
import CigarList from "./CigarList";

function CigarMap(props) {
  return (
    <div className="cigar-list-container">
      <h2>Cigar List</h2>
      <div className="cigars-list">
        {props.cigarData.map((cigar) => (
          <CigarList cigar={cigar} key={cigar.id} />
        ))}
      </div>
    </div>
  );
}

export default CigarMap;

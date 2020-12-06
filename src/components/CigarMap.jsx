import React from "react";
import CigarList from "./CigarList";

function CigarMap(props) {
  return (
    <div>
      <h2>Cigar List</h2>
      {props.cigarData.map((cigar) => (
        <CigarList cigar={cigar} key={cigar.id} />
      ))}
    </div>
  );
}

export default CigarMap;

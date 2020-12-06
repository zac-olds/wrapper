import React from "react";
import { Link } from "react-router-dom";

const CigarList = (props) => {
  console.log("props: ", props.cigar);
  if (props.cigar.id[0]) {
    return (
      <Link to={`/cigars/${props.cigar.id}`}>
        <div>{props.cigar.fields.cigar}</div>
      </Link>
    );
  } else {
    return (
      <div>
        <h4>Cigar List</h4>
        <div>Loading...</div>
      </div>
    );
  }
};

export default CigarList;

import React from "react";
import { Link } from "react-router-dom";
import "./CigarList.css";

const CigarList = (props) => {
  console.log("props: ", props.cigar);
  if (props.cigar.id[0]) {
    return (
      <Link to={`/cigars/${props.cigar.id}`} id="cigar-link">
        <div>{props.cigar.fields.cigar}</div>
      </Link>
    );
  } else {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }
};

export default CigarList;

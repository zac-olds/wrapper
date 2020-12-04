import React from "react";
import { Link } from "react-router-dom";

const CigarList = (props) => {
  console.log("props: ", props.cigar);
  if (props.cigar.id[0]) {
    return <div>{props.cigar.fields.cigar}</div>;
  } else {
    <div>Loading...</div>;
  }
};

export default CigarList;

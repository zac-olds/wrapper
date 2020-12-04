import React from "react";
import { Link } from "react-router-dom";

const CigarList = (props) => {
  console.log(props);
  if (props.cigar.id[0]) {
    return <div>Cigar</div>;
  } else {
    <div>Loading...</div>;
  }
};

export default CigarList;

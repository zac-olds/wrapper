import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div>
        <em>
          “It is the most relaxing thing. Every time I get to a point where
          everything is coming at me, I would rather just sit back and smoke a
          cigar and relax.”
        </em>
        <p> ―Michael Jordan</p>
      </div>
      <div>
        <Link to="/cigar/list">
          <button> Cigar List </button>
        </Link>
        <Link to="/new-review">
          <button> New Review </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

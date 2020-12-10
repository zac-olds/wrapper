import React from "react";
import { Link } from "react-router-dom";
import TopThree from "./TopThree";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="quote-container">
        <em id="quote">
          “It is the most relaxing thing. Every time I get to a point where
          everything is coming at me, I would rather just sit back and smoke a
          cigar and relax.”
        </em>
        <p> ―Michael Jordan</p>
        <input></input>
      </div>
      <h2>Best Cigars</h2>
      <div className="top-three-container">
        <TopThree cigarData={props.cigarData} />
      </div>
      <div className="button-container">
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

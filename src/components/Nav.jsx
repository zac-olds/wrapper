import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div>
          <Link to="/" id="header-link">
            <h1>the wrapper</h1>
          </Link>
        </div>
        <div>
          <Search cigarData={this.props.cigarData} />
        </div>
      </div>
    );
  }
}

export default Nav;

{
  /* <form className="nav-search">
            <input
              name="cigar-search"
              type="text"
              id="cigar-search-bar"
              placeholder="Search wrapper"
            />
            <button type="submit">Search</button>
          </form> */
}

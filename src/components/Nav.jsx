import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="nav-container">
        <div>
          <Link to="/" id="header-link">
            <h1>wrapper</h1>
          </Link>
        </div>
        <div>
          <form className="nav-search">
            <input
              name="cigar-search"
              type="text"
              id="cigar-search-bar"
              placeHolder="Search wrapper"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;

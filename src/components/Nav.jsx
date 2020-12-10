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
            the wrapper
          </Link>
        </div>
        <div>
          <Search
            cigarData={this.props.cigarData}
            refresh={this.props.refresh}
          />
        </div>
      </div>
    );
  }
}

export default Nav;

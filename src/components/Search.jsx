import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  // create state to store search values from input
  const [search, setSearch] = useState("");
  const { cigarData, refresh } = props;
  // if cigarData contains the search input, then it is returned by filter. All
  const results = cigarData.filter((s) => {
    let string = JSON.stringify(s);
    return string.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="search-input"
        autoComplete="off"
      />
      <button id="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div className="results-menu">
        {search &&
          results.map((result) => (
            <Link
              className="search-result"
              to={`/cigars/${result.id}`}
              key={result.id}
              onClick={() => {
                refresh((prev) => !prev);
                setSearch(""); // sets search back to initial state to remove the drop down menu.
              }}
            >
              <p>{result.fields.cigar}</p>
            </Link>
          ))}
      </div>
    </form>
  );
}

Search.defaultProps = {
  source: [],
};

export default Search;

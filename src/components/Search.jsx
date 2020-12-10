import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

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
    <form className="search-bar">
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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

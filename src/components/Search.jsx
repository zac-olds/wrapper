import React from "react";
import { useState } from "react";

function Search(props) {
  // create state to store search values from input
  const [search, setSearch] = useState("");

  const { source } = props;
  // if cigarData contains the search input, then it is returned by filter. All
  const results = source.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <form className="search-bar">
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>{search && results.map((result) => <p>{result}</p>)}</div>
    </form>
  );
}

Search.defaultProps = {
  source: [],
};

export default Search;

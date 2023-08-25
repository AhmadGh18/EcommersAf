import React, { useState, useEffect } from "react";
import SearchBar from "./SerachBar";
import { SearchResultsList } from "./SearchResultList";
import { Header } from "./Header";
import { Allinfo } from "./Allinfo";
export const HomePage = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="homepage">
      <h1>Welcome to our shop</h1>
      <p>We sells everything (literally)</p>
      <div className="cont">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
};

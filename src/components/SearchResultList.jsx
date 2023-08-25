import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  const navigate = useNavigate();

  function handleclick(prodid) {
    navigate(`/result/${prodid}`);
  }

  return (
    <div className="results-list">
      {results.map((result) => (
        <SearchResult
          result={result.title}
          src={result.thumbnail}
          key={result.id}
          onClick={() => handleclick(result.id)}
        />
      ))}
    </div>
  );
};

import { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if (value == "") {
      setResults([]);
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => response.json())
      .then((json) => {
        setResults(json.products);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

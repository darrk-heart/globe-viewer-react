import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ onSearch, isDarkMode }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "white" : "#2b3743",
        color: isDarkMode ? "black" : "white",
        display: "flex",
        width: "400px",
        padding: "8px",
        paddingLeft: "20px",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <FaSearch style={{ paddingTop: "8px" }} />
      <input
        type="text"
        placeholder="Search for a country"
        style={{
          border: "none",
          backgroundColor: "inherit",
          padding: "inherit",
          outline: "none",
          width: "80%",
          color: "inherit",
        }}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

import React, { useState } from "react";
import searchicon from "../../assets/search-button.svg";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        width: "400px",
        padding: "8px",
        paddingLeft: "20px",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src={searchicon} alt="searchicon" style={{ width: "15px" }} />
      <input
        type="text"
        placeholder="Search for a country"
        style={{
          border: "none",
          backgroundColor: "inherit",
          padding: "inherit",
          outline: "none",
          width: "80%",
        }}
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;

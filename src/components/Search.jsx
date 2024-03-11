import React from "react";
import searchicon from "../assets/search-button.svg";

function Search() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        width: "310px",
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
      />
    </div>
  );
}

export default Search;

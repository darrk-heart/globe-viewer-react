import React from "react";
import dropdown from "../../assets/drop-down.png";

function Filter() {
  return (
    <div
      className="filter"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        width: "170px",
      }}
    >
      <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>
        Filter by Region
      </span>
      <img
        src={dropdown}
        alt="drop down icon "
        style={{ width: "15px", height: "auto" }}
      />
    </div>
  );
}

export default Filter;

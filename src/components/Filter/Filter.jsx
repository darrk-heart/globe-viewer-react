import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="hey">
      <div className="filter">
        <div className="filter-div">
          <span>Filter by Region</span>
          <span style={{ fontWeight: "800" }}> > </span>
        </div>
      </div>
      <div className="lists" style={{}}>
        <ul>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;

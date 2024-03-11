import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <div className="filter-div">Filter by Region</div>
      <div className="lists">
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

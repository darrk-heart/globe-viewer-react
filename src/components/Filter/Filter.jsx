import React from "react";
import dropdown from "../../assets/drop-down.png";

function Filter() {
  return (
    <div
      className="filter"
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <span>Filter by Region</span>
      <img
        src={dropdown}
        alt="drop down icon "
        style={{ width: "15px", height: "auto" }}
      />
    </div>
  );
  // {
  //   /* <div className="lists" style={{}}>
  //       <ul>
  //         <li>Africa</li>
  //         <li>America</li>
  //         <li>Asia</li>
  //         <li>Europe</li>
  //         <li>Oceania</li>
  //       </ul>
  //     </div> */
  // }
}

export default Filter;

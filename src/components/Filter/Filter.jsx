import React, { useState } from "react";
import dropdown from "../../assets/drop-down.png";
import dropup from "../../assets/drop-up.png";

const FilterComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleIcon = isOpen ? dropup : dropdown;

  return (
    <div
      className="filter"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        className="filter-header"
        onClick={toggleDropdown}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "4px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          minWidth: "170px",
        }}
      >
        <span style={{ fontWeight: "600", fontSize: "0.9rem" }}>
          Filter by Region
        </span>
        <img
          src={toggleIcon}
          alt="drop down icon "
          style={{ width: "15px", height: "auto" }}
        />
      </div>
      {isOpen && (
        <div
          className="dropdown-content"
          style={{
            position: "absolute",
            top: "105%",
            left: 0,
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: "2",
              fontWeight: "500",
              fontSize: "0.9rem",
              color: "#444444",
              cursor: "pointer",
            }}
          >
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;

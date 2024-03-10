import React from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "../styles/Heading.css";

function Heading({ toggleTheme, isDarkMode }) {
  return (
    <div className="head">
      <div className="small-head">
        <h2>Where in the world</h2>
        <div className="mode-toggle" onClick={toggleTheme}>
          <img
            className="sun-moon"
            src={isDarkMode ? sun : moon}
            alt={isDarkMode ? "sun icon" : "moon icon"}
          />
          <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;

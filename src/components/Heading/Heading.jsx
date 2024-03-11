import React from "react";
import "./Heading.css";
import moon from "../../assets/icon-moon.svg";

function Heading() {
  return (
    <div className="head">
      <div className="small-head">
        <h2>Where in the world ?</h2>
        <div className="mode-toggle">
          <img src={moon} alt="moon icon" className="sun-moon" />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;
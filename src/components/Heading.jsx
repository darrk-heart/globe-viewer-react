import React from "react";
import "../styles/Heading.css";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

function Heading() {
  return (
    <div className="head">
      <div className="small-head">
        <h2>Where in the world</h2>
        <div className="mode-toggle">
          <img src={moon} alt="moon icon" />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;

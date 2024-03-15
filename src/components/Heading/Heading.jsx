import React from "react";
import moon from "../../assets/icon-moon.svg";

function Heading() {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "2px solid #eeeeee",
        display: "flex",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "95%",
          justifyContent: "space-between",
          display: "flex",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <h2>Where in the world ?</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={moon}
            alt="moon icon"
            style={{
              width: "16px",
              marginRight: "10px",
            }}
          />
          <span>Dark Mode</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;

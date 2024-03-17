import { FaMoon, FaSun } from "react-icons/fa";

function Heading({ isDarkMode, toggleMode }) {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "2px solid #eeeeee",
        display: "flex",
        backgroundColor: isDarkMode ? "white" : "#2b3743",
        color: isDarkMode ? "black" : "white",
      }}
    >
      <div
        style={{
          width: "95%",
          justifyContent: "space-between",
          display: "flex",
          marginRight: "auto",
          marginLeft: "auto",
          alignItems: "center",
        }}
      >
        <h2>Where in the world?</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            onClick={toggleMode}
            style={{
              marginRight: "15px",
              paddingTop: "4px",
              cursor: "pointer",
            }}
          >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </span>
          <span onClick={toggleMode} style={{ cursor: "pointer" }}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Heading;

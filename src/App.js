import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Content from "./components/Content/Content";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import React, { useState } from "react";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className="App">
      <Heading />
      <div className="container">
        <div className="search-filter">
          <Search />
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <Content filter={filter} />
      </div>
    </div>
  );
}

export default App;

import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Content from "./components/Content/Content";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail.jsx";

function App() {
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Router>
        <div className={isDarkMode ? "App" : " App dark"}>
          <Heading isDarkMode={isDarkMode} toggleMode={toggleMode} />
          <div className="container">
            <div className="search-filter">
              <Search isDarkMode={isDarkMode} onSearch={handleSearch} />
              <Filter
                isDarkMode={isDarkMode}
                onFilterChange={handleFilterChange}
              />
            </div>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Content
                    isDarkMode={isDarkMode}
                    filter={filter || searchQuery}
                  />
                )}
              />
              <Route path="/modal" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="container">
        <div className="search-filter">
          <Search />
          <Filter />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;

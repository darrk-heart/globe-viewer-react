import "./styles/App.css";
import Heading from "./components/Heading/Heading";
import Content from "./components/Content/Content";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";

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

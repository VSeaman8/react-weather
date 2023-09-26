import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <br />
      <footer>
        <a
          href="https://github.com/VSeaman8/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          Open Sourced
        </a>
        by Vicki Seaman
      </footer>
    </div>
  );
}

export default App;

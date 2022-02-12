import React from "react";
import Search from "./Search";
import Overview from "./Overview";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <div className="weather-app">
          <Search />
          <Overview />
          <Forecast />
          <small className="github-link">
            <a href="https://github.com/AllySadz/weather-react" target="_blank">
              open-source code
            </a>
            , by Ally Sadzius
          </small>
        </div>
      </div>
    </div>
  );
}

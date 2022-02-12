import React, { useState } from "react";
import MainImg from "./MainImg";
import "./Overview.css";

export default function Overview(props) {
  const [city, setCity] = useState("");

  console.log(props);
  return (
    <div className="overview">
      <h1 id="city"> {props.city} </h1>
      <small>
        Last updated <span id="date">Thursday 18:33</span>
      </small>

      <div className="row temperature-overview">
        <div className="coloumn">
          <ul>
            <li id="description">Clear Sky</li>
            <li>
              Humidity: <span id="humidity">20</span>%
            </li>
            <li>
              Wind: <span id="wind">30</span> km/h
            </li>
          </ul>
        </div>
        <div className="coloumn">
          <div className="weather-temperature">
            <div id="icon">
              <MainImg />
            </div>
            <div className="temperature-elements">
              <strong id="temperature">-1</strong>
              <span>°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

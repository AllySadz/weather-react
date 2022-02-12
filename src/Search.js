import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

//arrow syntax
// const "function name" = ("variables") =>{"function body"}
// better for readability

export default function Search() {
  // const [icon, setIcon] = useState("");
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);

    // set the props

    //setTemperature(response.data.main.temp);
    //setDescription(response.data.weather[0].description);
    //setWind(response.data.wind.speed);
    //setHumidity(response.data.main.humidity);
    //setIcon(
    // `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    //);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //let apiKey = "";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios
      .get(url)
      .then(handleResponse)
      .catch((error) => {
        alert("Please check spelling of city:");
      });
  }

  return (
    <div className="Search">
      <form id="searchForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="searchBar">
            <input
              type="search"
              placeholder="Type a city..."
              id="cityInput"
              autoFocus
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="submitButton">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}

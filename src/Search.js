import React, { useState } from "react";
import ShowWeather from "./ShowWeather";
import "./App.css";
import axios from "axios";

export default function Search(props) {
  let [searchQuery, setSearchQuery] = useState("");
  let [weatherData, setWeatherData] = useState("");

  function updateSearch(event) {
    setSearchQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `e6ad35b5f3210ce95c5f2b1592b152b6`;
    let unit = "units";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}&units=${unit}`;

    axios
      .get(url)
      .then(function(response) {
        setWeatherData(response.data);
      })
      .catch(function(error) {
        // Handle errors here
        console.error(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={updateSearch}
          value={searchQuery}
          placeholder="Type a city"
        />
        <input type="submit" value="Search" />
      </form>
      <ShowWeather weatherData={weatherData} />
    </div>
  );
}

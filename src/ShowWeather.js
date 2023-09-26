import React from "react";
import "./App.css";

export default function ShowWeather(props) {
  if (!props.weatherData) {
    return null;
  }
  const temperatureInKelvin = props.weatherData.main?.temp;
  const temperatureInCelsius = temperatureInKelvin - 273.15;
  const description = props.weatherData.weather[0].description;
  const humidity = props.weatherData.main.humidity;
  const wind = props.weatherData.wind.speed;
  const icon = `http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`;

  return (
    <div class="weatherDescptn">
      <h2> The weather in {props.weatherData.name} is:</h2>
      <img src={icon} alt={description} />
      <ul>
        <li key="description">Description: {description} </li>
        <li key="temperature">
          Temperature: {Math.round(temperatureInCelsius)} °C
        </li>
        <li key="humidity">Humidity: {humidity} % </li>
        <li key="wind">Wind: {wind} KM/H </li>
      </ul>
    </div>
  );
}

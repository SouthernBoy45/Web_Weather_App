import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [weatherDetails, setWeatherDetails] = useState();
  const [zipCode, setZipCode] = useState();

  const displayWeatherDetails = async () => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${parseInt(
          zipCode,
          10
        )},US&units=imperial&appid=440ed8745d5dd10a03e50ff8bfac2665`
      );
      setWeatherDetails(response.data);
      console.log(weatherDetails);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (zipCode) {
      displayWeatherDetails(zipCode);
      setZipCode("")
    }
  }

  function clearData() {
    setWeatherDetails(null);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Enter Zip Code for Local Weather: 
        <input type="number" min="1" max="99999" onChange={(event) => setZipCode(event.target.value)}/>
        <button type="submit">Get Weather</button>
      </form>
      {weatherDetails && (
        <div>
          <h2>Weather Where You Live</h2>
          <p>Location: {weatherDetails.name}</p>
          <p>Temperature: {weatherDetails.main.temp}</p>
          <p>Feels Like: {weatherDetails.main.feels_like}</p>
          <p>Humidity: {weatherDetails.main.humidity}</p>
          <p>High for the day: {weatherDetails.main.temp_max}</p>
          <p>Low for the day: {weatherDetails.main.temp_min}</p>
          <p>Wind Speed: {weatherDetails.wind.speed}</p>
          <p>Wind Degree: {weatherDetails.wind.deg}</p>
          <h3>Coordinates</h3>
          <p>Latitude:{weatherDetails.coord.lat}</p>
          <p>Longitude: {weatherDetails.coord.lon}</p>
          <h3>{capitalizeFirstLetter(weatherDetails.weather[0].description)}</h3>
        </div>
      )};
        {weatherDetails && (
        <button onClick={clearData}>Reset</button>)}
    </div>
  )
};

export default HomePage;

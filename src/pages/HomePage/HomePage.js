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
    }
  }
  return(
    <div>
      
    </div>
  )
};

export default HomePage;

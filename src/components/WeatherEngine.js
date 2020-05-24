import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

import WeatherCard from "./weatherCard/components";

function WeatherEngine({ location }) {
  const WeatherEngine = styled.div`
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  //const location = "Quito, ec";
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });
  const getWeather = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f6d96e5e7d6474b5e7278cd9213ab161&units=metric`
    );
    const resJSON = await apiRes.json();
    setWeather({
      temp: resJSON.main.temp,
      city: resJSON.name,
      condition: resJSON.weather[0].main,
      country: resJSON.sys.country,
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };
  const inputCity = useRef(null);
  useEffect(() => {
    inputCity.current.focus();
    getWeather(location);
  }, [query, location]);

  return (
    <WeatherEngine>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputCity}
          name="title"
          label="Title"
          placeholder="Enter a title"
        />
        <button onClick={(e) => handleSearch(e)}>Buscar</button>
      </form>
    </WeatherEngine>
  );
}

export default WeatherEngine;

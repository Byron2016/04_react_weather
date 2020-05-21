import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

import "./App.css";
import WeatherCard from "./components/weatherCard/components";

function App() {
  const App = styled.div`
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `;
  //const [query, setQuery] = useState("Sydney, au");
  const [query, setQuery] = useState("Almeria, es");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `
      https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f6d96e5e7d6474b5e7278cd9213ab161&units=metric
      `
    );

    const resJSON = await apiRes.json();
    return resJSON;
  };
  //console.log(data());
  //data().then((res) => console.log(res));

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      /*
      console.log(res.main.temp);
      console.log(" the feels like is " + res.main.feels_like);
      */
      /*
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
      setCity(res.name);
      */
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
  };

  //const { useRef, useEffect } = React;
  const inputCity = useRef(null);
  useEffect(() => {
    inputCity.current.focus();
    /*
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
    */
  }, [query]);

  return (
    <App>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input
          ref={inputCity}
          name="title"
          label="Title"
          placeholder="Enter a title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button onClick={(e) => handleSearch(e)}>Buscar</button>
      </form>
    </App>
  );
}

export default App;

import React, { useState } from "react";
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
  const [city, setCity] = useState("Sidney, au");

  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [country, setCountry] = useState("");

  const data = async () => {
    const apiRes = await fetch(
      `
      https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6d96e5e7d6474b5e7278cd9213ab161&units=metric
      `
    );

    const resJSON = await apiRes.json();
    return resJSON;
  };
  //console.log(data());
  //data().then((res) => console.log(res));

  const handleSearch = (e) => {
    e.preventDefault();
    data().then((res) => {
      /*
      console.log(res.main.temp);
      console.log(" the feels like is " + res.main.feels_like);
      */
      setTemp(res.main.temp);
      setCondition(res.weather[0].main);
      setCountry(res.sys.country);
    });
  };

  const { useRef, useEffect } = React;
  const inputCity = useRef(null);
  useEffect(() => {
    inputCity.current.focus();
  }, [city]);

  return (
    <App>
      <WeatherCard
        temp={temp}
        condition={condition}
        city={city}
        country={country}
      />
      <form>
        <input
          ref={inputCity}
          name="title"
          label="Title"
          placeholder="Enter a title"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={(e) => handleSearch(e)}>Buscar</button>
      </form>
    </App>
  );
}

export default App;

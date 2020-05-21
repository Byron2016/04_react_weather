import React from "react";
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
  return (
    <App>
      <WeatherCard temp={30} condition="Clear" city="Quito" country="EC" />
      <WeatherCard temp={-20} condition="Snow" city="Bogota" country="CO" />
      <WeatherCard temp={40} condition="Tornado" city="Miami" country="US" />
      <WeatherCard temp={0} condition="Hail" city="Santiago" country="CL" />
    </App>
  );
}

export default App;

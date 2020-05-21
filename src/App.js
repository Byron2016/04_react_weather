import React from "react";

import "./App.css";
import WeatherCard from "./components/weatherCard/components";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={30} />
      <WeatherCard temp={20} />
      <WeatherCard temp={40} />
      <WeatherCard temp={0} />
    </div>
  );
}

export default App;

import React from "react";

import "./App.css";
import styled from "@emotion/styled";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  const App = styled.div`
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-end;
  `;
  return (
    <App>
      <WeatherEngine location="Quito, ec" />
      <WeatherEngine location="Guayaquil, ec" />
      <WeatherEngine location="Calgary, ca" />
      <WeatherEngine location="Gjoa Haven, ca" />
      <WeatherEngine location="McMurdo Station, aq" />
    </App>
  );
}

export default App;

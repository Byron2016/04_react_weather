//https://www.youtube.com/watch?v=NJWI1b1upps&list=PLDIXF8nb0VG1v4S-smVy7GV0MHsJ3PJiL&index=1
//https://react-2020.thinkific.com/courses/take/learn-react-in-2020/lessons/9927486-introduction-to-react

import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    //para clima caliente
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `
      linear-gradient(
        to top,
        rgba(255, ${highColor}, 0),
        rgba(255, ${lowColor}, 0)
      )
    `;
  } else if (temp <= 12) {
    // para clima frio
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `
      linear-gradient(
        to top,
        rgba(0, ${highColor}, 255),
        rgba(0, ${lowColor}, 255)
      )
    `;
  }
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;

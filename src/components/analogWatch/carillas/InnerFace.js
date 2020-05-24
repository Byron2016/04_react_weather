import React from "react";
import styled from "@emotion/styled";

import HandHour from "./HandHour";
import HandMinute from "./HandMinute";
import HandSecond from "./HandSecond";

const InnerFace = () => {
  const Container = styled.div`
    position: relative;
    width: 88%;
    height: 88%;
    background: white /*rgb(231, 231, 231)*/;
    border-radius: 100px;
    z-index: 1000;
    left: 50%; /*set this value of 1/2 width value*/
    top: 50%; /*set this value of 1/2 height value*/
    transform: translate(-50%, -50%);
    &:before {
      content: "";
      width: 18px;
      height: 18px;
      border-radius: 18px;
      background: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 30px blue;
    }
    &:after {
      content: "QUARTZ";
      position: absolute;
      width: 100%;
      font: normal 0.8em Arial;
      color: gray;
      text-align: center;
      top: 85%;
    }
  `;

  return (
    <Container>
      <HandMinute />
      <HandHour />
      <HandSecond />
    </Container>
  );
};

export default InnerFace;

import React from "react";
import styled from "@emotion/styled";

const OneSeven = () => {
  const Container = styled.div`
    position: absolute;
    height: 100%;
    z-index: 0;
    left: 50%;
    top: 0;

    background: gray;
    width: 6px;
    transform: translate(-50%);
    transform: rotate(30deg);
  `;

  return <Container></Container>;
};

export default OneSeven;

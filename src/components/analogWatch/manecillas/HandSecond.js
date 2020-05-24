import React from "react";
import styled from "@emotion/styled";

const HandSecond = ({ segundo }) => {
  let second_as_degree = `
  rotate( ${segundo}deg);
`;

  const Container = styled.div`
    position: absolute;
    height: 50%;
    width: 2px;
    margin-left: -1px;
    top: 0;
    left: 50%;
    background: rgb(170, 0, 0);
    transform: translate(-50%);
    transform: ${second_as_degree};
    transform-origin: 0% 100%;
    z-index: -1;
  `;

  return <Container></Container>;
};

export default HandSecond;

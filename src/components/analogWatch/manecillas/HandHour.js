import React from "react";
import styled from "@emotion/styled";

const HandHour = ({ hora }) => {
  let hour_as_degree = `
  rotate( ${hora}deg);
`;
  const Container = styled.div`
    position: absolute;
    width: 4px; /* width of hour hand */
    height: 30%; /* height of hour hand */
    top: 20%; /* set top to 50% - height */
    left: 50%;
    margin-left: -2px; /* set this value to 1/2 width */
    background: rgb(0, 0, 0);
    transform: translate(-50%);
    transform: ${hour_as_degree};
    transform-origin: 0% 100%;
    z-index: -1;
    box-shadow: 0 0 3px gray;
  `;

  return <Container></Container>;
};

export default HandHour;

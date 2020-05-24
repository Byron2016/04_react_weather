import React from "react";
import styled from "@emotion/styled";

const HandMinute = ({ minuto }) => {
  let minute_as_degree = `
  rotate( ${minuto}deg);
`;
  const Container = styled.div`
    position: absolute;
    height: 45%; /* height of min hand */
    top: 5%; /* set top to 50% - height */
    left: 50%;
    width: 5px; /* width of min hand */
    /*margin-left: -2.5px;  set this value to 1/2 width */
    background: rgb(0, 0, 0);
    transform: translate(-50%);
    transform: ${minute_as_degree};
    transform-origin: 0% 100%;
    z-index: -1;
  `;

  return <Container></Container>;
};

export default HandMinute;

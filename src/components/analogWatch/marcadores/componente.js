import React from "react";
import styled from "@emotion/styled";

import OneSeven from "./OneSeven";
import TwoEight from "./TwoEight";
import FourTen from "./FourTen";
import FiveEleven from "./FiveEleven";

const Marcador = () => {
  const Container = styled.div`
    content: "";
    position: absolute;
    height: 100%;
    z-index: 0;
    left: 50%;
    top: 0;

    background: black;
    width: 6px;
    transform: translate(-50%);
  `;

  return (
    <Container>
      <OneSeven />
      <TwoEight />
      <FourTen />
      <FiveEleven />
    </Container>
  );
};

export default Marcador;

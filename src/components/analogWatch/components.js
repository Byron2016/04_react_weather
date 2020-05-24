//https://www.lawebdelprogramador.com/codigo/JavaScript/4473-Reloj-analogico.html
//css: https://mosaic.uoc.edu/ac/le/es/m6/ud2/
import React from "react";
import styled from "@emotion/styled";

import OutterFace from "./carillas/OutterFace";

const AnalogWatch = ({ city, country }) => {
  const Container = styled.div`
    /*
    position: relative;
    background: rgb(47, 53, 79);
    top: 50px;
    left: 50px;
    */
  `;

  return (
    <Container>
      <OutterFace />
    </Container>
  );
};

export default AnalogWatch;

//https://www.w3schools.com/cssref/css3_pr_transform.asp

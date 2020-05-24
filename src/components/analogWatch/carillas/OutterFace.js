import React from "react";
import styled from "@emotion/styled";

//import InnerFace from "./InnerFace";
import InnerNueva from "./InnerNuevo";
import Marcador from "../marcadores/componente";

const OutterFace = () => {
  const Container = styled.div`
    position: relative;
    width: 200px; /* width of clock */
    height: 200px; /* height of clock */
    border-radius: 100px; /* clock round corner radius */
    background: white /*rgb(238, 238, 238)*/;
    box-shadow: inset 0 0 10px gray;
    border: 0 solid gray; /* thickness of outer border */
    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 100%;
      background: black;
      z-index: 0;
      left: 50%;
      margin-left: -4px;
      top: 0;
    }
    &:after {
      content: "";
      position: absolute;
      width: 8px;
      height: 100%;
      background: black;
      z-index: 0;
      left: 50%;
      margin-left: -4px;
      top: 0;
      transform: rotate(90deg);
    }
  `;

  return (
    <Container>
      <Marcador />
      <InnerNueva />
    </Container>
  );
};

export default OutterFace;

import React, { Component } from "react";
import styled from "@emotion/styled";

import HandHour from "../manecillas/HandHour";
import HandMinute from "../manecillas/HandMinute";
import HandSecond from "../manecillas/HandSecond";

class InnerNueva extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curdate: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      curdate: new Date(),
    });
  }

  render() {
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

    let hour_as_degree =
      ((this.state.curdate.getHours() + this.state.curdate.getMinutes() / 60) /
        12) *
      360;
    let minute_as_degree = (this.state.curdate.getMinutes() / 60) * 360;
    let second_as_degree =
      ((this.state.curdate.getSeconds() +
        this.state.curdate.getMilliseconds() / 1000) /
        60) *
      360;

    return (
      <Container>
        <HandMinute minuto={minute_as_degree} />
        <HandHour hora={hour_as_degree} />
        <HandSecond segundo={second_as_degree} />
      </Container>
    );
  }
}

export default InnerNueva;

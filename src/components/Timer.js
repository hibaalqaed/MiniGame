import React, { Component } from "react";
import { TimerStyle } from "../styles";

export default class Timer extends Component {
  state = { minutes: 2, seconds: 0 };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <TimerStyle>
        {minutes === 0 && seconds === 0 ? (
          <h1>TIMEOUT!</h1>
        ) : (
          <div>
            Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
      </TimerStyle>
    );
  }
}

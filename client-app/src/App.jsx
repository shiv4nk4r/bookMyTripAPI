import "./app.scss";

import React, { useState } from "react";
import { render } from "react-dom";
import { Login, Register } from "./components/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggingActive: true,
    };
  }

  changeState() {
    const { isLoggingActive } = this.state;
    if (isLoggingActive) {
      this.RightSide.classList.remove("right");
      this.RightSide.classList.add("left");
    } else {
      this.RightSide.classList.remove("left");
      this.RightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLoggingActive: !prevState.isLoggingActive,
    }));
  }

  render() {
    const { isLoggingActive } = this.state;
    const current = isLoggingActive ? "Register" : "Login";
    const currentActice = isLoggingActive ? "Login" : "Register";
    return (
      <div className="App">
        <div className="login">
          <div className="conatiner">
            {isLoggingActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLoggingActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => (this.RightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;

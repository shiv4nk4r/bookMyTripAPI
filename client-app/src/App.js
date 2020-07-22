import React, { useState } from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <>
        <div>Is this still working LMAO</div>
        <div>{this.state.apiResponse}</div>
      </>
    );
  }
}

export default App;

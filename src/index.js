import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const styles = {
  lightOn: {
    background: "white"
  },
  lightOff: {
    background: "black"
  }
};

class App extends React.Component {
  state = {
    status: true,
    red: 255,
    green: 255,
    blue: 255
  };

  constructor(props) {
    super(props);

    this.handleSwitchClick = this.handleSwitchClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.generateStyle = this.generateStyle.bind(this);
  }

  generateStyle() {
    const { red, green, blue } = this.state;

    return {
      background: `rgb(${red}, ${green}, ${blue})`
    };
  }

  handleColorChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSwitchClick() {
    this.setState({
      status: !this.state.status
    });
  }

  render() {
    const { status, red, green, blue } = this.state;
    return (
      <div
        className="App"
        style={status ? this.generateStyle() : styles.lightOff}
      >
        <div style={{ background: "#fff", width: "50%", margin: "0 auto" }}>
          <h1>Light Switch</h1>
          <div>
            R:{" "}
            <input
              name="red"
              type="number"
              value={red}
              onChange={this.handleColorChange}
            />
            <br />
            G:{" "}
            <input
              name="green"
              type="number"
              value={green}
              onChange={this.handleColorChange}
            />
            <br />
            B:{" "}
            <input
              name="blue"
              type="number"
              value={blue}
              onChange={this.handleColorChange}
            />
          </div>
          <button onClick={this.handleSwitchClick}>
            {status ? "Turn Off" : "Turn On"}
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

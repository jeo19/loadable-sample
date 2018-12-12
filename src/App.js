import React, { Component } from "react";
class App extends Component {
  handleClick = () => {
    import("./Notify").then(({ default: Notify }) => {
      Notify();
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default App;

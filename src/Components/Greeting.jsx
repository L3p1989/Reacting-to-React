import React, { Component } from "react";

// const Greeting = props => {
//   return <h1>Heya {props.name}!</h1>;
// };

class Greeting extends Component {
  render() {
    return <h1>Heya {this.props.name}!</h1>;
  }
}

export default Greeting;

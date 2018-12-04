import React, { Component } from "react";

class Greeting extends Component {
  render() {
    const text = "Welcome to 'Reacting to React'";
    return (
      <h1>
        Heya {this.props.name}! {text}
      </h1>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "This is an input",
      hasLoaded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      hasLoaded: true
    });
  }

  render() {
    return (
      <>
        <input type="text" placeholder={this.state.inputText} />
        <button onClick={this.handleClick}>Button</button>
        <Greeting name="Patrick" />
      </>
    );
  }
}

export default App;

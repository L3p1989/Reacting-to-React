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
    }); //onClick set hasLoaded to true
  }

  //   componentDidMount() {
  //     this.setState({
  //       hasLoaded: true
  //     });
  //   }//this will make it to where the h1 loading and button will never appear because they are dependant on hasLoaded being false. this sets it to true once the `App` is mounted from virt DOM to real DOM

  render() {
    let clickButton;

    if (this.state.hasLoaded === false) {
      clickButton = (
        <>
          <h1>...Loading</h1>
          <button onClick={this.handleClick}>Click Me!</button>
        </>
      );
    } else
      clickButton = (
        <>
          <Greeting name="Patrick" />
        </>
      ); //on button click render Greeting

    return (
      <>
        <input type="text" placeholder={this.state.inputText} />
        {clickButton}
      </>
    );
  }
}

export default App;

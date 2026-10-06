
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    console.log("constructor");
  }

  render() {
    console.log("render");

    return (
      <h1>{this.state.count}</h1>
    );
  }
  componentDidMount() {
  console.log("componentDidMount");
  
}
}

export default App;
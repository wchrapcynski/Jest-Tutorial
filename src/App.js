import React, { Component } from "react";
import Add from "./components/Add";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Add />
        </header>
      </div>
    );
  }
}

export default App;

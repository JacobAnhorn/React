import React, { Component } from "react";
import "./App.css";
import DashboardComponent from "./Components/DashboardComponents/DashboardComponent.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardComponent />
      </div>
    );
  }
}

export default App;

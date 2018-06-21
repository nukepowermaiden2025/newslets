import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div class="container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

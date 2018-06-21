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
          <div>HEADER</div>
          <div>ASIDE</div>
          <div>CONTENT</div>
          <div>FOOTER</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

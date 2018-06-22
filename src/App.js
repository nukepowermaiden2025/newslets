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
          <div class="header">HEADER</div>
          <div class="aside">ASIDE</div>
          <div class="content-a"> CONTENT A</div>
          <div class="content-b"> CONTENT B</div>
          <div class="content-c"> CONTENT C</div>
          <div class="content-d"> CONTENT D</div>
          <footer class="footer">FOOTER</footer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

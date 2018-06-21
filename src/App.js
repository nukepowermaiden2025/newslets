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
          <div class="content">
            <div class="cell1">Cell 1</div>
            <div class="cell2">Cell 2</div>
            <div class="cell3">Cell 3</div>
            <div class="cell4">Cell 4</div>
          </div>
          <footer class="footer">FOOTER</footer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

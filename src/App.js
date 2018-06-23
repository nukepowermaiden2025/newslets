import React, { Component } from "react";
import logo from "./icon_N.png";
import "./App.css";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title logo={logo} />
        <div class="container">
          <Header />
          <Aside />
          <Content contentPosition="content-a" feature="CONTENT A" />
          <Content contentPosition="content-b" feature="CONTENT B" />
          <Content contentPosition="content-c" feature="CONTENT C" />
          <Content contentPosition="content-d" feature="CONTENT D" />
          <footer class="footer">FOOTER</footer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

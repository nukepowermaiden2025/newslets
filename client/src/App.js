import React, { Component } from "react";
import logo from "./icon_N.png";
import "./App.css";
import "./index.css";
import API from "./utils/API";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Header from "./components/Header";
import Article from "./components/Article";
// import Content from "./components/Content";
import Button from "./components/Button"; //TODO connectbutton
import Input from "./components/Input";
import DatePicker from "./components/DatePicker";
import ListPicker from "./components/ListPicker";
import "./pages/Search.css";
import moment from "moment";

class App extends Component {
  state = {
    fromDate: moment(Date.now()).format("YYYYMMDD"),
    toDate: moment(Date.now())
      .add(7, "days")
      .format("YYYYMMDD"),
    search: "United States",
    listpick: 5,
    results: [],
    error: "",
    date: ""
  };
  // // When the component mounts, get a list of todays headlines
  componentDidMount() {
    this.searchArticles(
      this.state.search,
      this.state.fromDate,
      this.state.toDate
    );
  }

  // Search for Articles needs to get query from the API//TODO
  searchArticles = (query, fromDate, toDate) => {
    API.search(query, fromDate, toDate)
      .then(res => {
        this.setState({ results: res.data.response.docs });
      })
      .catch(err => console.log(err));
  };

  handleFromDate = date => {
    this.setState({ fromDate: moment(date._d).format("YYYYMMDD") });
    console.log(this.state.fromDate);
  };
  handleToDate = date => {
    this.setState({ toDate: moment(date._d).format("YYYYMMDD") });
    console.log(this.state.toDate);
  };
  handleRecordChange = e => {
    this.setState({ listpick: e.target.value });
    // console.log(this.state.listpick);
  };
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.searchArticles(
      this.state.search,
      this.state.fromDate,
      this.state.toDate
    );
  };
  render() {
    return (
      <div className="App">
        <div className="form-container">
          <form>
            <Input
              value={this.state.search}
              placeholder="Search Terms"
              name="search"
              onChange={this.handleInputChange}
            />
            <ListPicker
              recordCount={this.state.listpick}
              onChange={this.handleRecordChange}
            />
            <DatePicker
              placeholder="From Date"
              dateName="fromDate"
              handledate={this.handleFromDate}
            />
            <DatePicker
              placeholder="To Date"
              dateName="toDate"
              handledate={this.handleToDate}
            />

            <button onClick={this.handleFormSubmit}> Search</button>
          </form>
        </div>

        <div className="container">
          <Header />
          <main className="aside">
            {this.state.results.map(result => (
              <Article
                key={result._id}
                title={result.headline.main}
                synopsis={result.snippet}
                publication={moment(result.pub_date).format("MM-DD-YYYY")}
                // href={result.web_url}
              />
            ))}
          </main>
          <footer className="footer">FOOTER</footer>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

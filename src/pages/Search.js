//User hit the submit button
//Search for articles based on startdate and enddate

import React, { Component } from "react";
import "./Search.css";
// import API from "../utils/API";TODO
// import Container from "../components/Container";TODO
import Button from "../components/Button"; //TODO connectbutton
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";
import DatePicker from "../components/DatePicker";
import moment from "moment";

class Search extends Component {
  state = {
    fromDate: "",
    toDate: "",
    articles: [],
    results: [],
    error: "",
    date: ""
  };

  // When the component mounts, get a list of todays headlines
  //   componentDidMount() {
  //     this.searchArticles("");
  //   }

  //Search for Articles needs to get query from the API//TODO
  //   searchArticles = query => {
  //     API.search(query)
  //       .then(res => this.setState({ result: res.data }))
  //       .catch(err => console.log(err));
  //   };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("The submit button is working");
    console.log("Input From Date being sumitted is ", this.state.fromDate);
    console.log("Input To Date being sumitted is ", this.state.toDate);
    this.setState({
      fromDate: "",
      toDate: ""
    });
    // this.searchArticles(this.state.search);
  };

  handleFromDate = date => {
    this.setState({ fromDate: moment(date._d).format("YYYYMMDD") });
  };
  handleToDate = date => {
    this.setState({ toDate: moment(date._d).format("YYYYMMDD") });
  };
  render() {
    console.log("Input from date ", this.state.fromDate);
    console.log("Input to date ", this.state.toDate);
    return (
      <div className="form-container">
        <DatePicker
          placeholder="From Date"
          dateName="fromDate"
          handleDate={this.handleFromDate}
        />
        <DatePicker
          placeholder="To Date"
          dateName="toDate"
          handleDate={this.handleToDate}
        />
        <Button handleFormSubmit={this.handleFormSubmit} />
        {/* <SearchResults results={this.state.results} /> */}
      </div>
    );
  }
}

export default Search;

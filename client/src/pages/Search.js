//User hit the submit button
//Search for articles based on startdate and enddate

import React, { Component } from "react";
import "./Search.css";
import API from "../utils/API";
// import Container from "../components/Container";TODO
import Button from "../components/Button"; //TODO connectbutton
import Input from "../components/Input";
// import SearchResults from "../components/SearchResults";
import DatePicker from "../components/DatePicker";
import ListPicker from "../components/ListPicker";

import moment from "moment";

class Search extends Component {
  state = {
    fromDate: "",
    toDate: "",
    search: "",
    listpick: 5,
    articles: [],
    results: [],
    error: "",
    date: ""
  };

  // When the component mounts, get a list of todays headlines
  //   componentDidMount() {
  //     this.searchArticles("");
  //   }

  // Search for Articles needs to get query from the API//TODO
  searchArticles = (query, fromDate, toDate) => {
    API.search(query, fromDate, toDate)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleFormSubmit = e => {
  //   e.preventDefault();
  //   console.log("The submit button is working");
  //   console.log("Input From Date being sumitted is ", this.state.fromDate);
  //   console.log("Input To Date being sumitted is ", this.state.toDate);
  //   this.setState({
  //     fromDate: "",
  //     toDate: ""
  //   });
  //   // this.searchArticles(this.state.search);
  // };

  handleFromDate = date => {
    this.setState({ fromDate: moment(date._d).format("YYYYMMDD") });
    console.log(this.state.fromDate);
  };
  handleToDate = date => {
    this.setState({ toDate: moment(date._d).format("YYYYMMDD") });
    console.log(this.state.fromDate);
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
    console.log("Search:", this.state.search);
    console.log("this is the target record count", this.state.listpick);
    console.log("Input from date ", this.state.fromDate);
    console.log("Input to date ", this.state.toDate);
    // if (this.state.search && this.state.fromDate && this.state.toDate) {
    //   API.search({
    //     search: this.state.search,
    //     fromDate: this.state.fromDate,
    //     toDate: this.state.toDate,
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

  render() {
    return (
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
            onChange={this.handleFromDate}
          />
          <DatePicker
            placeholder="To Date"
            dateName="toDate"
            onChange={this.handleInputChange}
          />
          {/* <Button onClick={this.handleFormSubmit} /> */}
          <button onClick={this.handleFormSubmit}> Search</button>
        </form>
        {/* <SearchResults results={this.state.results} /> */}
      </div>
    );
  }
}

export default Search;

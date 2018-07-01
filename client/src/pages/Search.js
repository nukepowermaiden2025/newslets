//User hit the submit button
//Search for articles based on startdate and enddate

import React, { Component } from "react";
// import "./Search.css";
// import "../App.css";
import API from "../utils/API";
// import Container from "../components/Container";TODO
import Button from "../components/Button"; //TODO connectbutton
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import ListPicker from "../components/ListPicker";

class Search extends Component {
  state = {
    fromDate: moment(Date.now()).format("YYYYMMDD"),
    toDate: moment(Date.now())
      .add(3, "days")
      .format("YYYYMMDD"),
    search: "United States",
    listpick: 5,
    articles: [],
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
        this.setState({ results: res.data });
        console.log(res);
        console.log(res.data.response.docs[0]);
        console.log(res.data.response.docs[0].web_url);
        console.log(res.data.response.docs[0].snippet);
        console.log(res.data.response.docs[0].headline.main);
        console.log(
          moment(res.data.response.docs[0].pub_date).format("MM-DD-YYYY")
        );
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
    console.log("Search:", this.state.search);
    console.log("this is the target record count", this.state.listpick);
    console.log("Input from date ", this.state.fromDate);
    console.log("Input to date ", this.state.toDate);

    this.searchArticles(
      this.state.search,
      this.state.fromDate,
      this.state.toDate
    );
  };

  render() {
    console.log("Input from date ", this.state.fromDate);
    console.log("Input to date ", this.state.toDate);
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
            handledate={this.handleFromDate}
          />
          <DatePicker
            placeholder="To Date"
            dateName="toDate"
            handledate={this.handleToDate}
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

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

class Search extends Component {
  state = {
    startDate: "",
    endDate: "",
    articles: [],
    results: [],
    error: ""
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
  //Needs to get startdate and enddate and set is equal to this.startdate and this.enddate//TODO
  handleChange = event => {
    console.log("Input change connected");
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    console.log("The submit button is working");
    // event.preventDefault();
    // this.searchArticles(this.state.search);
  };
  render() {
    return (
      <div className="form-container">
        <SearchForm
          fromTo="From"
          labelId="startDate"
          handleChange={this.handleChange.bind(this)}
          value={this.state.startDate}
          name={this.state.name}
          type="text"
          className="form1"
          placeholder="Start Year"
        />
        <SearchForm
          fromTo="To"
          labelId="endDate"
          handleChange={this.handleChange.bind(this)}
          value={this.state.endDate}
          name={this.state.name}
          type="text"
          className="form2"
          placeholder="End Year"
        />

        <Button handleFormSubmit={this.handleFormSubmit} />
        {/* <SearchResults results={this.state.results} /> */}
      </div>
    );
  }
}

export default Search;

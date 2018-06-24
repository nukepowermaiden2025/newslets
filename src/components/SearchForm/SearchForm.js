//Get input from users for building the query
//Submit will need to get functions for startdate/enddate
import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <form>
    <label htmlFor={props.labelId}>{props.fromTo}</label>
    <input
      onChange={props.handleChange}
      value={props.dateEntry}
      name={props.name}
      type="text"
      className="form-control"
      placeholder={props.placeholder}
      id={props.labelId}
    />
  </form>
);

export default SearchForm;

//Get input from users for building the query
//Submit will need to get functions for startdate/enddate
import React from "react";
import "./Input.css";
import "../../index.css";

const Input = props => (
  <input
    className="form-control"
    {...props}
    placeholder={props.placeholder}
    value={props.value}
    name={props.name}
    onChange={props.onChange}
  />
);

export default Input;

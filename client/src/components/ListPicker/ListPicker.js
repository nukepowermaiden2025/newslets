import React from "react";
import "./ListPicker.css";
import "../../index.css";

const ListPicker = props => {
  return (
    <select
      name="recordCount"
      value={props.recordCount}
      onChange={props.onChange}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  );
};

export default ListPicker;

import React from "react";
import "./DatePicker.css";
import DateTime from "react-datetime";
import "moment";

class DatePicker extends React.Component {
  render() {
    return (
      <DateTime
        inputProps={{
          name: this.props.dateName,
          placeholder: this.props.placeholder
        }}
        onChange={this.props.handleDate}
      />
    );
  }
}

export default DatePicker;

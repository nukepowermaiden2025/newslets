import React from "react";
import "./DatePicker.css";
import "react-datetime";

const DatePicker = React.createClass({
  render: function() {
    return <Datetime renderInput={this.renderInput} />;
  },
  renderInput: function(props, openCalendar, closeCalendar) {
    function clear() {
      props.onChange({ target: { value: "" } });
    }
    return (
      <div>
        <input {...props} />
        <button onClick={openCalendar}>open calendar</button>
        <button onClick={closeCalendar}>close calendar</button>
        <button onClick={clear}>clear</button>
      </div>
    );
  }
});

export default DatePicker;

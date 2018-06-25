//Import React
//Import Button CSS styles for coloring
//This will be a reusable button
//This need to handle seeing saved articles/ getting new articles
//Props need:
//...props
//Onclick Handler
import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <button
      {...props}
      onSubmit={e => props.handleFormSubmit(...props)}
      className="btn btn-primary"
    >
      Search
    </button> //Change this one to the method I used with last weeks homework
  );
};

export default Button;

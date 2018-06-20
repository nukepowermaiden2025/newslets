import React from "react";
import "./Title.css";

const Title = props => {
  return (
    <div className="row" id="css" {...props}>
      <div className="col-md-4">
        {/* <p className="text-center">Click to play, but don't click on the same picture twice.</p> */}
      </div>
      <div className="col-md-4">
        <h1 className="h1 text-center">Newslets</h1>
      </div>
      <div className="col-md-4">
        {/* <h1 className="h4 text-center">Score: <span> {props.score} </span></h1>
            <h1 className="h4 text-center">High Score: <span> {props.highScore} </span></h1> */}
      </div>
    </div>
  );
};

export default Title;

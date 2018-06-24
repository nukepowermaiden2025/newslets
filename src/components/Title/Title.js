import React from "react";
import "./Title.css";
import "../../index.css";

const Title = props => {
  return (
    <div className="title" {...props}>
      <img src={props.logo} alt="N logo" />
      <div className="icon">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Letter N">
          Letter N
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
};

export default Title;

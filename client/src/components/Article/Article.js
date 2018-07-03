import React from "react";
import "./Article.css";
import "../../index.css";
// import Link from "react-router/lib/Link";

const Article = props => {
  return (
    <div className="article">
      {/* component={Link} */}
      {/* to={props.href} */}

      <a href={props.href}>
        <h1>{props.title}</h1>
      </a>
      <p>
        {props.synopsis}
        <br />
        {props.publication}
      </p>
      <button onClick={() => props.handleClick(props.id)}>Save</button>
    </div>
  );
};

export default Article;

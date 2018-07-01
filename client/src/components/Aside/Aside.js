//Import React
//Import Aside CSS styles for coloring
//This will be a compositional component for majority of Article components
//This need to wrap the foreach() on the App.js
//This component will render articles to the Featured Content Components
//This will have the button that renders new articles
//Props need:

import React from "react";
import "./Aside.css";
import Article from "../Article";

const Aside = props => {
  return (
    <div className="aside" {...props}>
      {this.state.results.map(result => (
        <Article
          title={result.headline.main}
          synopsis={result.snippet}
          publication={result.web_url}
          src={result.web_url}
          href={result.web_url}
        />
      ))}
      {props.result}.map(element =>{<Article {...props} />})
    </div>
  );
};

export default Aside;

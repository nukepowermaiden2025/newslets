//Import React
//Import Article CSS styles
//This component will render articles to the Aside component
//This component will render articles to the Featured Content Components
//Props need:
///Title
///Description
///Href
//Img(will ot be displayed here)
///Key/Id
///Onclick <button> to Handle "Favorite the article"
//Note when I return the JSON from the api I will return all the
import React from "react";
import "./Article.css";

const Article = props => {
  return (
    <div className="article">
      <h1>{props.title}</h1>
      <p>
        {props.synopsis}
        <br />
        {props.publication}
      </p>

      <img src={props.src} href={props.href} />

      <button onClick={e => props.handleSaveArticle(...props)}>Save</button>
    </div>
  );
};

export default Article;

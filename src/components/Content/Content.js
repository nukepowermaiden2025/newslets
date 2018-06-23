//Import React
//Import Article CSS styles
//This component will render one articles to the Featured Content Components
//Props need:
///Title
///Description
///Href
///Image
///Key/Id
///Onclick <button> to Handle "Favorite the article"
///Onclick<button> to handle removing from container and getting another article

import React from "react";
import "./Content.css";

const Content = props => {
  return <div className={props.contentPosition}>{props.feature}</div>;
};

export default Content;

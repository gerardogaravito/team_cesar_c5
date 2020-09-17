//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import styles and images
import "../assets/components-style/Recommendation.scss";

const RecommendationCard = (props) => {
  return (
    <Fragment>
      <div className="RecommendationCard">
        <img
          className="RecommendationCard__img"
          src={props.image}
          alt={props.userName}
        />
        <h3 className="RecommendationCard__title">{props.userName}</h3>
        <p className="RecommendationCard__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          odit quos nostrum eius illum adipisci!
        </p>
      </div>
    </Fragment>
  );
};

export default RecommendationCard;

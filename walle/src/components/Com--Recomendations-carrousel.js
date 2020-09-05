//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import RecommendationCard from "../cards/Card--Recomendation";

//------------------------------ import styles and images
import "../assets/components-style/Recommendation.scss";
import userPicture from "../assets/images/userpic.jpg";

const RecommendationCarrousel = () => {
  return (
    <Fragment>
      <div className="Recommendation-carrousel">
        <h2 className="Recommendation-carrousel__title">Ellos recomiendan</h2>
        <div className="Recommendation-carrousel__container">
          <RecommendationCard image={userPicture} userName="Pepita Perez" />
          <RecommendationCard image={userPicture} userName="Pepita Perez" />
          <RecommendationCard image={userPicture} userName="Pepita Perez" />
          <RecommendationCard image={userPicture} userName="Pepita Perez" />
          <RecommendationCard image={userPicture} userName="Pepita Perez" />
        </div>
      </div>
    </Fragment>
  );
};

export default RecommendationCarrousel;

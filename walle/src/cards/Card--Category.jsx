//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import styles and images
import "../assets/components-style/RecipeDashboard.scss";

const CategoryCard = (props) => {
  return (
    <Fragment>
      <Link to="/walle">
        <div className="Category-card">
          <img
            className="Category-card__img"
            src={props.picture}
            alt={props.name}
          />
          <p className="Category-card__name">{props.name}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default CategoryCard;

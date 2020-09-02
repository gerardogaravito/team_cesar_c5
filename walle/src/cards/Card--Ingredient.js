//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import components
import "./styles/Ingredient.scss";
//------------------------------ import styles and images

const IngredientCard = (props) => {
  return (
    <Fragment>
      <Link to="/walle">
        <div className="Ingredient-card">
          <img
            className="Ingredient-card__img"
            src={props.picture}
            alt={props.name}
          />
          <p className="Ingredient-card__name">{props.name}</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default IngredientCard;

//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import "./styles/Ingredient.scss";
//------------------------------ import styles and images

const IngredientCard = (props) => {
  return (
    <Fragment>
      <div className="Ingredient-card">
        <img
          className="Ingredient-card__img"
          src={props.picture}
          alt={props.name}
        />
        <p className="Ingredient-card__name">Nombre</p>
      </div>
    </Fragment>
  );
};

export default IngredientCard;

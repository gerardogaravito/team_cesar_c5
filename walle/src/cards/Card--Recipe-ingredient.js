//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components

//------------------------------ import styles and images
import "../cards/styles/RecipeIngredient.scss";

const RecipeIngredientItem = (props) => {
  return (
    <Fragment>
      <div className="RecipeIngredientItem">
        <input type="checkbox" name="" id={props.id} />
        <label className="RecipeIngredientItem__label" htmlFor={props.id}>
          <p className="RecipeIngredientItem__cant">{props.cant}</p>
          <p className="RecipeIngredientItem__name">{props.name}</p>
        </label>
      </div>
    </Fragment>
  );
};

export default RecipeIngredientItem;

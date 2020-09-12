//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import RecipeIngredientItem from "../cards/Card--Recipe-ingredient";

//------------------------------ import styles and images
import "../assets/components-style/Recipe.scss";

//------------------------------------ COMPONENT ------------------------------------//
const RecipeIngredientsList = () => {
  return (
    <Fragment>
      <div className="Recipe-ingredients">
        <h2>Ingredientes</h2>
        <div className="Recipe-ingredients__container-list">
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="1" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="2" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="3" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="4" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="5" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="6" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="7" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="8" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="9" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="10" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="11" />
          <RecipeIngredientItem name="Ingrediente" cant="1/2" id="12" />
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeIngredientsList;

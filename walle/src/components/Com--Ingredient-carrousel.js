//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import IngredientCard from "../cards/Card--Ingredient";

//------------------------------ import styles and images
import "./styles/IngredientCarrousel.scss";
import foodPicture from "../images/cardexample.jpeg";

const IngredientCarrousel = () => {
  return (
    <Fragment>
      <section className="Ingredient-carrousel">
        <h2 className="Ingredient-carrousel__title">Nuestras recetas</h2>
        <div className="Ingredient-carrousel__cards">
          <IngredientCard picture={foodPicture} name="Apio" />
          <IngredientCard picture={foodPicture} name="Lechuga" />
          <IngredientCard picture={foodPicture} name="Tomate" />
          <IngredientCard picture={foodPicture} name="Cerdo" />
          <IngredientCard picture={foodPicture} name="Pollo" />
          <IngredientCard picture={foodPicture} name="Tacos" />
        </div>
      </section>
    </Fragment>
  );
};

export default IngredientCarrousel;

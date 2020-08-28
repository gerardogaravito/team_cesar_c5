//------------------------------ import libraries
import React, { Fragment, Component } from "react";

//------------------------------ import components
import IngredientCard from "../cards/Card--Ingredient";

//------------------------------ import styles and images
import "./styles/IngredientCarrousel.scss";
import foodPicture from "../images/cardexample.jpeg";

class RecipeDashboard extends Component {
  render() {
    return (
      <Fragment>
        <section className="Ingredient-carrousel">
          <h2 className="Ingredient-carrousel__title">Nuestras recetas</h2>
          <div className="Ingredient-carrousel__cards">
            <IngredientCard picture={foodPicture} />
            <IngredientCard picture={foodPicture} />
            <IngredientCard picture={foodPicture} />
            <IngredientCard picture={foodPicture} />
            <IngredientCard picture={foodPicture} />
            <IngredientCard picture={foodPicture} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default RecipeDashboard;

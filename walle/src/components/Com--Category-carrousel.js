//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import CategoryCard from "../cards/Card--Category";

//------------------------------ import styles and images
import "../assets/components-style/RecipeDashboard.scss";
import foodPicture from "../assets/images/cardexample.jpeg";

const CategoryCarrousel = () => {
  return (
    <Fragment>
      <section className="Ingredient-carrousel">
        <h2 className="Ingredient-carrousel__title">Nuestras recetas</h2>
        <div className="Ingredient-carrousel__cards">
          <CategoryCard picture={foodPicture} name="Apio" />
          <CategoryCard picture={foodPicture} name="Lechuga" />
          <CategoryCard picture={foodPicture} name="Tomate" />
          <CategoryCard picture={foodPicture} name="Cerdo" />
          <CategoryCard picture={foodPicture} name="Pollo" />
          <CategoryCard picture={foodPicture} name="Tacos" />
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryCarrousel;

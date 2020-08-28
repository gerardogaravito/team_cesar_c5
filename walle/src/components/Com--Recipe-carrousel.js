//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components
import RecipeCard from "../cards/Card--Recipe";

//------------------------------ import styles and images
import "./styles/RecipeCarrousel.scss";
import recipeImg from "../images/cardexample.jpeg";

class RecipeCarrousel extends Component {
  render() {
    return (
      <Fragment>
        <section className="Recipe-carrousel">
          <h2 className="Recipe-carrousel__title">Recetas recomendas</h2>
          <div className="Recipe-carrousel__cards-container">
            <RecipeCard
              card="main-card"
              image={recipeImg}
              name="Nombre receta"
              portions="4"
              time="40"
              difficult="Medio"
            />
            <RecipeCard
              image={recipeImg}
              name="Nombre receta"
              portions="4"
              time="40"
              difficult="Medio"
            />
            <RecipeCard
              image={recipeImg}
              name="Nombre receta"
              portions="4"
              time="40"
              difficult="Medio"
            />
            <RecipeCard
              image={recipeImg}
              name="Nombre receta"
              portions="4"
              time="40"
              difficult="Medio"
            />
            <RecipeCard
              image={recipeImg}
              name="Nombre receta"
              portions="4"
              time="40"
              difficult="Medio"
            />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default RecipeCarrousel;

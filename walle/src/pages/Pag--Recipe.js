//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import MainHero from "../components/Com--Main-hero";
import Metadata from "../cards/Card--Metadata";
import RecipeIngredientsList from "../components/Com--Recipe-ingredients";
import RecipeInstructionsList from "../components/Com--Recipe-instructions";
import RecipeCarrousel from "../components/Com--Recipe-carrousel";
import Footer from "../components/Com--Footer";

//------------------------------ import styles and images
import "../assets/components-style/Layout.scss";

export class RecipePage extends Component {
  render() {
    return (
      <div className="Layout">
        <MainHero />
        <div className="Layout__body">
          <Metadata />
          <RecipeIngredientsList />
          <RecipeInstructionsList />
          <RecipeCarrousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default RecipePage;

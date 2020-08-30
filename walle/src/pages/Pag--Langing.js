//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import MainHero from "../components/Com--Main-hero";
import IngredientCarrousel from "../components/Com--Ingredient-carrousel";
import RecipeDashboard from "../components/Com--Recipes-dashboard";
import InstructionsSection from "../cards/Card--Instructions";
import RecommendationCarrousel from "../components/Com--Recomendations-carrousel";
import Footer from "../components/Com--Footer";
//------------------------------ import styles and images
import "./styles/Landing.scss";

export class LandingPage extends Component {
  render() {
    return (
      <div className="Landing">
        <MainHero />
        <div className="Landing__body">
          <IngredientCarrousel />
          <RecipeDashboard />
          <InstructionsSection />
          <RecommendationCarrousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;

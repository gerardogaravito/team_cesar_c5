//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import SearchHero from "../components/Com--Search-hero";
import RecipeCarrousel from "../components/Com--Recipe-carrousel";
import Footer from "../components/Com--Footer";
//------------------------------ import styles and images
import "./styles/Layout.scss";

export class HomePage extends Component {
  render() {
    return (
      <div className="Layout">
        <SearchHero />
        <div className="Layout__body">
          <RecipeCarrousel title="Recetas recomendadas" />
          <RecipeCarrousel title="Recetas vegetarianas" />
          <RecipeCarrousel title="Recetas especiales para asados" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

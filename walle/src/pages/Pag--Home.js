//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import SearchHero from "../components/Com--Search-hero";
import RecipeCarrousel from "../components/Com--Recipe-carrousel";
import Footer from "../components/Com--Footer";
//------------------------------ import styles and images
import "./styles/Home.scss";

export class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <SearchHero />
        <div className="Home__body">
          <RecipeCarrousel />
          <RecipeCarrousel />
          <RecipeCarrousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

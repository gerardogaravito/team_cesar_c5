//------------------------------ import libraries
import React from "react";

//------------------------------ import components
import Header from "./Com--Header";

//------------------------------ import styles and images
import "../assets/components-style/Hero.scss";
import heroPic from "../assets/images/hero-img.jpeg";

//------------------------------------ COMPONENT ------------------------------------//
const MainHero = ({ handleLoginClick, handleSignClick }) => {
  return (
    <section className="Hero">
      <img src={heroPic} alt="" className="Hero__img" />
      <Header handleLogin={handleLoginClick} handleSign={handleSignClick} />
      <div className="Hero__information">
        <h1 className="Hero__title">Walle</h1>
        <div className="Hero__description">
          <p className="Hero__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            iusto, officia laborum eius nihil laudantium possimus dolore modi
            repellendus sit.
          </p>
          <button className="main-button--xxl" onClick={handleSignClick}>
            Registro
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;

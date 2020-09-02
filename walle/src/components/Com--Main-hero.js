//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import components
import HeaderLanding from "./Com--Header-landing";

//------------------------------ import styles and images
import "./styles/Heros.scss";

const MainHero = () => {
  return (
    <Fragment>
      <section className="Hero">
        <HeaderLanding />
        <div className="Hero__information">
          <h1 className="Hero__title">Walle</h1>
          <div className="Hero__description">
            <p className="Hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              iusto, officia laborum eius nihil laudantium possimus dolore modi
              repellendus sit.
            </p>
            <Link className="main-button--xxl" to="/">
              Registro
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MainHero;

//------------------------------ import libraries
import React, { Fragment, Component } from "react";

//------------------------------ import components

//------------------------------ import styles and images
import "./styles/RecipeDashboard.scss";
import foodPicture from "../images/cardexample.jpeg";

class RecipeDashboard extends Component {
  render() {
    return (
      <Fragment>
        <section className="Dashboard">
          <h2 className="Dashboard__title">Nuestras recetas</h2>
          <p className="Dashboard__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt
            commodi, deleniti quidem porro veritatis maxime vero nesciunt magni
            delectus, debitis est aliquid quibusdam distinctio laborum veniam
            aliquam sit fugit.
          </p>
          <div className="CardDashboard card1">
            <img
              className="CardDashboard__img"
              src={foodPicture}
              alt="Recipe name"
            />
            <p className="CardDashboard__title">Nombre receta</p>
          </div>
          <div className="CardDashboard card2">
            <img
              className="CardDashboard__img"
              src={foodPicture}
              alt="Recipe name"
            />
            <p className="CardDashboard__title">Nombre receta</p>
          </div>
          <div className="CardDashboard card3">
            <img
              className="CardDashboard__img"
              src={foodPicture}
              alt="Recipe name"
            />
            <p className="CardDashboard__title">Nombre receta</p>
          </div>
          <div className="CardDashboard card4">
            <img
              className="CardDashboard__img"
              src={foodPicture}
              alt="Recipe name"
            />
            <p className="CardDashboard__title">Nombre receta</p>
          </div>
          <div className="CardDashboard card5">
            <img
              className="CardDashboard__img"
              src={foodPicture}
              alt="Recipe name"
            />
            <p className="CardDashboard__title">Nombre receta</p>
          </div>
          <div className="CardDashboard card6">
            <img
              className="CardDashboard__img"
              src={foodPicture}
              alt="Recipe name"
            />
            <p className="CardDashboard__title">Nombre receta</p>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default RecipeDashboard;

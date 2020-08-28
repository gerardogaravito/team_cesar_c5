//------------------------------ import libraries
import React, { Fragment, Component } from "react";

//------------------------------ import components
import DashboardCard from "../cards/Card--Dashboard";

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
          <DashboardCard name="Nombre receta" image={foodPicture} id="1" />
          <DashboardCard name="Nombre receta" image={foodPicture} id="2" />
          <DashboardCard name="Nombre receta" image={foodPicture} id="3" />
          <DashboardCard name="Nombre receta" image={foodPicture} id="4" />
          <DashboardCard name="Nombre receta" image={foodPicture} id="5" />
          <DashboardCard name="Nombre receta" image={foodPicture} id="6" />
        </section>
      </Fragment>
    );
  }
}

export default RecipeDashboard;

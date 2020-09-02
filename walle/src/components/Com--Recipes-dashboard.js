//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import DashboardCard from "../cards/Card--Dashboard";

//------------------------------ import styles and images
import "./styles/RecipeDashboard.scss";
import foodPicture from "../images/cardexample.jpeg";

const RecipeDashboard = () => {
  return (
    <Fragment>
      <section className="Dashboard">
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
};

export default RecipeDashboard;

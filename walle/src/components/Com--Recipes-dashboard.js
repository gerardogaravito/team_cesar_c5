//------------------------------ import libraries
import React from "react";

//------------------------------ import components
// import DashboardCard from "../cards/Card--Dashboard";

//------------------------------ import styles and images
import "../assets/components-style/RecipeDashboard.scss";
// import foodPicture from "../assets/images/cardexample.jpeg";

//------------------------------------ COMPONENT ------------------------------------//
const RecipeDashboard = (props) => {
  return (
    <section className="Dashboard">
      <p className="Dashboard__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sunt
        commodi, deleniti quidem porro veritatis maxime vero nesciunt magni
        delectus, debitis est aliquid quibusdam distinctio laborum veniam
        aliquam sit fugit.
      </p>
      {props.children}
      {/* <DashboardCard name="Nombre receta" image={foodPicture} id="1" />
        <DashboardCard name="Nombre receta" image={foodPicture} id="2" />
        <DashboardCard name="Nombre receta" image={foodPicture} id="3" />
        <DashboardCard name="Nombre receta" image={foodPicture} id="4" />
        <DashboardCard name="Nombre receta" image={foodPicture} id="5" />
        <DashboardCard name="Nombre receta" image={foodPicture} id="6" /> */}
    </section>
  );
};

export default RecipeDashboard;

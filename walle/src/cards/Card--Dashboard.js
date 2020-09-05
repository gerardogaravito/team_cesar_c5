//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import styles and images
import "../assets/components-style/RecipeDashboard.scss";

const DashboardCard = (props) => {
  return (
    <Fragment>
      <Link className={`CardDashboard card${props.id}`} to="/receta">
        <img
          className="CardDashboard__img"
          src={props.image}
          alt={props.name}
        />
        <p className="CardDashboard__name">{props.name}</p>
      </Link>
    </Fragment>
  );
};

export default DashboardCard;

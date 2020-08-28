//------------------------------ import libraries
import React, { Fragment } from "react";
//------------------------------ import styles and images
import "./styles/Dashboard.scss";

const DashboardCard = (props) => {
  return (
    <Fragment>
      <div className={`CardDashboard card${props.id}`}>
        <img
          className="CardDashboard__img"
          src={props.image}
          alt={props.name}
        />
        <p className="CardDashboard__name">{props.name}</p>
      </div>
    </Fragment>
  );
};

export default DashboardCard;

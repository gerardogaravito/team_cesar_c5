//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import styles and images
import "./styles/Headers.scss";
import Logo from "../images/logo-walle.png";

const HeaderLanding = () => {
  return (
    <Fragment>
      <header className="Header">
        <img className="Header__brand" src={Logo} alt="Logo de Walle" />
        <div className="Header__nav">
          <button className="second-button">Login</button>
          <button className="main-button">Registro</button>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderLanding;

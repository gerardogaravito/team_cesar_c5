//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import styles and images
import "../assets/components-style/Header.scss";
import Logo from "../assets/images/logo-walle.png";

const HeaderLanding = () => {
  return (
    <Fragment>
      <header className="Header">
        <Link to="/">
          <img className="Header__brand" src={Logo} alt="Logo de Walle" />
        </Link>
        <div className="Header__nav">
          <button className="second-button">Login</button>
          <button className="main-button">Registro</button>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderLanding;

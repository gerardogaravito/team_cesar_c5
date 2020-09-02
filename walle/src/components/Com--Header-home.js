//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import components
import { FaShoppingCart, FaHome } from "react-icons/fa";

//------------------------------ import styles and images
import "./styles/Headers.scss";
import Logo from "../images/logo-walle.png";
import UserImg from "../images/userpic.jpg";

const HeaderHome = () => {
  return (
    <Fragment>
      <header className="Header">
        <Link to="/">
          <img className="Header__brand" src={Logo} alt="Logo de Walle" />
        </Link>
        <div className="Header__nav">
          <Link to="/carrito">
            <FaShoppingCart className="icon--active" title="Shopping cart" />
          </Link>
          <Link to="/">
            <FaHome className="icon--active" title="Home" />
          </Link>
          <Link to="/usuario">
            <img className="Header__img" src={UserImg} alt="User avatar" />
          </Link>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderHome;

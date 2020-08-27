//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components
import { FaShoppingCart, FaHome } from "react-icons/fa";

//------------------------------ import styles and images
import "./styles/Headers.scss";
import "../global-styles/icons.scss";
import Logo from "../images/logo-walle.png";
import UserImg from "../images/userpic.jpg";

class HeaderHome extends Component {
  render() {
    return (
      <Fragment>
        <header className="Header">
          <img className="Header__brand" src={Logo} alt="Logo de Walle" />
          <div className="Header__nav">
            <FaShoppingCart className="icon--active" title="Shopping cart" />
            <FaHome className="icon--active" title="Home" />
            <img className="Header__img" src={UserImg} alt="User avatar" />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default HeaderHome;

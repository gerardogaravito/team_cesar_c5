//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components
import { FaTimes, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//------------------------------ import styles and images
import "./styles/Login.scss";
import logo from "../images/logo-walle.png";

class LoginModal extends Component {
  render() {
    return (
      <Fragment>
        <section className="Modal">
          <img src={logo} alt="" className="Modal__img" />
          <form className="Modal__form">
            <FaTimes className="icon--inactive Modal__exit"></FaTimes>
            <div className="Modal__garden">
              <FaInstagram className="icon--active" />
              <FaFacebookF className="icon--active" />
              <FaTwitter className="icon--active" />
            </div>
            <h3 className="Modal__title">Ya estoy contigo Walle</h3>
            <div className="input--centered">
              <label className="input-label" htmlFor="email">
                Correo:
              </label>
              <input
                className="input-text--centered"
                type="text"
                placeholder="Fulanito@email.com"
                id="email"
              />
            </div>
            <div className="input--centered">
              <label className="input-label" htmlFor="password">
                Contraseña:
              </label>
              <input
                className="input-text--centered"
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <button className="main-button">Entrar</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default LoginModal;

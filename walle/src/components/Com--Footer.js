//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//------------------------------ import styles and images
import "./styles/Footer.scss";
import "../global-styles/buttons.scss";
import "../global-styles/icons.scss";
import Logo from "../images/logo-walle.png";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className="Footer">
        <div className="Footer__nav">
          <FaInstagram className="icon--active" />
          <FaFacebookF className="icon--active" />
          <FaTwitter className="icon--active" />
        </div>
        <img className="Footer__brand" src={Logo} alt="Logo de Walle" />
      </footer>
    </Fragment>
  );
};

export default Footer;

//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import components
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//------------------------------ import styles and images
import "../assets/components-style/Footer.scss";
import Logo from "../assets/images/logo-walle.png";

const Footer = () => {
  return (
    <Fragment>
      <footer className="Footer">
        <div className="Footer__nav">
          <FaInstagram className="icon--active" />
          <FaFacebookF className="icon--active" />
          <FaTwitter className="icon--active" />
        </div>
        <Link to="/">
          <img className="Footer__brand" src={Logo} alt="Logo de Walle" />
        </Link>
      </footer>
    </Fragment>
  );
};

export default Footer;

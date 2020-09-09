//------------------------------ import libraries
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//------------------------------ import components
import SocialGarden from "../globalComponents/SocialGarden";

//------------------------------ import styles and images
import "../assets/components-style/Footer.scss";
import Logo from "../assets/images/logo-walle.png";

//------------------------------------ COMPONENT ------------------------------------//
const Footer = () => {
  return (
    <Fragment>
      <footer className="Footer">
        <SocialGarden />
        <Link to="/">
          <img className="Footer__brand" src={Logo} alt="Logo de Walle" />
        </Link>
      </footer>
    </Fragment>
  );
};

export default Footer;

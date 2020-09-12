//------------------------------ import libraries
import React from "react";

//------------------------------ import components
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//------------------------------ import styles and images
import "../assets/global-styles/icons.scss";

//------------------------------------ COMPONENT ------------------------------------//
const SocialGarden = () => {
  return (
    <div className="Modal__garden">
      <a href="/">
        <FaInstagram className="icon--active" />
      </a>
      <a href="/">
        <FaFacebookF className="icon--active" />
      </a>
      <a href="/">
        <FaTwitter className="icon--active" />
      </a>
    </div>
  );
};

export default SocialGarden;

//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import HeaderHome from "../components/Com--Header-home";
import UserInfo from "../components/Com--User-info";
import RecipeCarrousel from "../components/Com--Recipe-carrousel";
import Footer from "../components/Com--Footer";

//------------------------------ import styles and images
import "../assets/components-style/Layout.scss";

export class UserPage extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="Layout__body">
          <HeaderHome />
          <UserInfo
            userName="Pepita Perez"
            email="pepitaperez@email.com"
            phone="+57 3004486870"
          />
          <RecipeCarrousel title="Favoritos" />
          <RecipeCarrousel title="Compradas recientemente" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserPage;

//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import HeaderHome from "../components/Com--Header-home";
import UserInfo from "../components/Com--User-info";
import RecipeCarrousel from "../components/Com--Recipe-carrousel";
import Footer from "../components/Com--Footer";
//------------------------------ import styles and images
import "./styles/User.scss";

export class UserPage extends Component {
  render() {
    return (
      <div className="User">
        <div className="User__body">
          <HeaderHome />
          <UserInfo />
          <RecipeCarrousel />
          <RecipeCarrousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default UserPage;

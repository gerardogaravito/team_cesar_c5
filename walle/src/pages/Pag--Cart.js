//------------------------------ import libraries
import React, { Component } from "react";

//------------------------------ import components
import SearchHero from "../components/Com--Search-hero";
import CartHead from "../cards/Card--Cart-head";
import CartIngredient from "../components/Com--Cart-section";
import Payment from "../components/Com--Payment";
import Footer from "../components/Com--Footer";

//------------------------------ import styles and images
import "../assets/components-style/Layout.scss";

export class CartPage extends Component {
  render() {
    return (
      <div className="Layout">
        <SearchHero />
        <div className="Layout__body">
          <CartHead />
          <CartIngredient />
          <CartIngredient />
          <CartIngredient />
          <CartIngredient />
          <Payment />
        </div>
        <Footer />
      </div>
    );
  }
}

export default CartPage;

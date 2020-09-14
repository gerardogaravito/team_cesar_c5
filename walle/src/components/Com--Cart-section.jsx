//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import CartIngredient from "../cards/Card--Cart-ingredient";

//------------------------------ import styles and images
import "../assets/components-style/CartSection.scss";

//------------------------------------ COMPONENT ------------------------------------//
const CartSection = () => {
  return (
    <Fragment>
      <div className="CartSection">
        <h2>Fruta</h2>
        <div className="CartSection__ingredients-container">
          <CartIngredient
            ingredientName="Manzana"
            ingredientUnit="Unidad"
            ingredientCant="5"
            ingredientPrice="$5.00"
          />
          <CartIngredient
            ingredientName="Manzana"
            ingredientUnit="Unidad"
            ingredientCant="5"
            ingredientPrice="$5.00"
          />
          <CartIngredient
            ingredientName="Manzana"
            ingredientUnit="Unidad"
            ingredientCant="5"
            ingredientPrice="$5.00"
          />
          <CartIngredient
            ingredientName="Manzana"
            ingredientUnit="Unidad"
            ingredientCant="5"
            ingredientPrice="$5.00"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CartSection;

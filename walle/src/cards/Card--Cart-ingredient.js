//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import { FaTrashAlt } from "react-icons/fa";

//------------------------------ import styles and images
import "./styles/CartSection.scss";

const CartIngredient = (props) => {
  return (
    <Fragment>
      <div className="CartIngredient">
        <FaTrashAlt className="icon--list" />
        <p>{props.ingredientName}</p>
        <p>{props.ingredientUnit}</p>
        <p>{props.ingredientCant}</p>
        <p>{props.ingredientPrice}</p>
      </div>
    </Fragment>
  );
};

export default CartIngredient;

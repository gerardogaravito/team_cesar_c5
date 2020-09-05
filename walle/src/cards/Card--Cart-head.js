//------------------------------ import libraries
import React, { Fragment } from "react";
//------------------------------ import styles and images
import "../assets/components-style/CartSection.scss";

const CartHead = (props) => {
  return (
    <Fragment>
      <div className="CartHead">
        <p>Nombre</p>
        <p>unidad</p>
        <p>Cantidad</p>
        <p>Precio</p>
      </div>
    </Fragment>
  );
};

export default CartHead;

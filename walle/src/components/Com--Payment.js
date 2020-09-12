//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components

//------------------------------ import styles and images
import "../assets/components-style/Payment.scss";
import payoneerIcon from "../assets/images/logoPayoneer.png";

//------------------------------------ COMPONENT ------------------------------------//
const Payment = () => {
  return (
    <Fragment>
      <div className="Payment">
        <div className="Payment__description">
          <div className="Payment__shipment">
            <h3>Total</h3>
            <div className="Payment__shipping-time">
              <p>Tiempo estimado de envío</p>
              <h3>45 Mins</h3>
            </div>
            <div className="input">
              <label className="input-label" htmlFor="">
                Dirección:
              </label>
              <input className="input-text" type="text" />
            </div>
          </div>
          <div className="Payment__total">$125.00</div>
        </div>
        <div className="Payment__pay-button">
          Comprar <img src={payoneerIcon} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;

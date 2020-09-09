//------------------------------ import libraries
import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";

//------------------------------ import components
import { FaTimes } from "react-icons/fa";
import SocialGarden from "../globalComponents/SocialGarden";
import Input from "../globalComponents/Input";

//------------------------------ import styles and images
import "../assets/components-style/Login.scss";
import logo from "../assets/images/logo-walle.png";

//------------------------------------ COMPONENT ------------------------------------//
const LoginModal = forwardRef((props, ref) => {
  // const [display, setDisplay] = useState(false);
  const [display, setDisplay] = useState({ login: false, sign: false });

  // these are the functions referenced to landing
  useImperativeHandle(ref, () => {
    return {
      openLoginModal: () => openLoginModal(),
      openSignModal: () => openSignModal(),
    };
  });

  // functions to open and close the modal
  // this open the login version
  const openLoginModal = () => {
    setDisplay({ ...display, login: true });
  };
  // this open the sign version
  const openSignModal = () => {
    setDisplay({ ...display, sign: true });
  };
  const closeModal = () =>
    setDisplay({ ...display, login: false, sign: false });

  // validate if login or sign is true
  if (display.login || display.sign) {
    return ReactDom.createPortal(
      <section className="Modal-container">
        <div className="Modal">
          <img src={logo} alt="" className="Modal__img" />
          <form className="Modal__form">
            <FaTimes
              className="icon--inactive Modal__exit"
              onClick={closeModal}
            />
            <SocialGarden />

            {/* validate if login to display the right message  */}
            {display.login ? (
              <h3 className="Modal__title">Ya estoy contigo Walle</h3>
            ) : (
              <h3 className="Modal__title">Soy nuevo Walle</h3>
            )}
            <Input name="email" type="text" placeholder="Fulanito@email.com" />
            <Input name="password" type="password" placeholder="Password" />

            {/* validate if sign to display the third input */}
            {display.sign ? (
              <Input
                name="confirmPassword"
                type="password"
                placeholder="confirm Password"
              />
            ) : null}
            <button className="main-button">Entrar</button>
          </form>
        </div>
      </section>,

      document.getElementById("modal")
    );
  }
  return null;
});

export default LoginModal;

//------------------------------ import libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";

//------------------------------ import components
import { FaTimes } from "react-icons/fa";
import SocialGarden from "../globalComponents/SocialGarden";
import Input from "../globalComponents/Input";
import { loginRequest } from "../actions/usersActions";

//------------------------------------ COMPONENT ------------------------------------//
const Formlog = ({ closeModal, display }) => {
  const [form, setForm] = useState({ email: "" });
  const dispatch = useDispatch();

  // get the inputs info in form
  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //---------- send form data to store
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(form));
  };

  return (
    <form className="Modal__form" onSubmit={handleSubmit}>
      <FaTimes className="icon--inactive Modal__exit" onClick={closeModal} />
      <SocialGarden />

      {/* validate if login to display the right message  */}
      {display.login ? (
        <h3 className="Modal__title">Ya estoy contigo Walle</h3>
      ) : (
        <h3 className="Modal__title">Soy nuevo Walle</h3>
      )}
      <Input
        classmodifier="--centered"
        lable="Correo:"
        name="email"
        type="email"
        placeholder="Fulanito@email.com"
        getInputValue={handleInput}
      />
      <Input
        classmodifier="--centered"
        lable="Contraseña:"
        name="password"
        type="password"
        placeholder="Password"
        getInputValue={handleInput}
      />

      {/* validate if sign to display the third input */}
      {display.sign ? (
        <Input
          classmodifier="--centered"
          lable="Confirmar Contraseña:"
          name="confirmPassword"
          type="password"
          placeholder="confirm Password"
          getInputValue={handleInput}
        />
      ) : null}
      <button type="submit" className="main-button">
        Entrar
      </button>
    </form>
  );
};

export default Formlog;

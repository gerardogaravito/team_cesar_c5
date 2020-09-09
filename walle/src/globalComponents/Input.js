import React from "react";

//------------------------------------ COMPONENT ------------------------------------//
const Input = ({ name, type, placeholder }) => {
  return (
    <div className="input--centered">
      <label className="input-label" htmlFor={name}>
        Correo:
      </label>
      <input
        className="input-text--centered"
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
};

export default Input;

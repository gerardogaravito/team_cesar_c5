import React from "react";

//------------------------------------ COMPONENT ------------------------------------//
const Input = ({ name, type, placeholder, label }) => {
  return (
    <div className="input--centered">
      <label className="input-label" htmlFor={name}>
        {label}
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

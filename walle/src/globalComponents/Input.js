import React from "react";

//------------------------------------ COMPONENT ------------------------------------//
const Input = ({
  name,
  type,
  placeholder,
  lable,
  getInputValue,
  classmodifier,
}) => {
  return (
    <div className={`input${classmodifier}`}>
      <label className="input-label" htmlFor={name}>
        {lable}
      </label>
      <input
        className={`input-text${classmodifier}`}
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
        onChange={getInputValue}
      />
    </div>
  );
};

export default Input;

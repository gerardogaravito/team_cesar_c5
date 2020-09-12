//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import styles and images
import "../assets/components-style/Recipe.scss";

const InstructionItem = (props) => {
  return (
    <Fragment>
      <div className="InstructionItem">
        <input type="checkbox" id={props.id} />
        <label className="InstructionItem__label" htmlFor={props.id}>
          <p className="InstructionItem__step">{props.step}.</p>
          <p className="InstructionItem__description">{props.description}</p>
        </label>
      </div>
    </Fragment>
  );
};

export default InstructionItem;

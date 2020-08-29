//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import styles and images
import "./styles/Instruction.scss";

const InstructionItem = (props) => {
  return (
    <Fragment>
      <div className="InstructionItem">
        <input type="checkbox" name="" id={props.id} />
        <label className="InstructionItem__label" htmlFor={props.id}>
          <p className="InstructionItem__step">{props.id}.</p>
          <p className="InstructionItem__description">{props.description}</p>
        </label>
      </div>
    </Fragment>
  );
};

export default InstructionItem;

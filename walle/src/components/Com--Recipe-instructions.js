//------------------------------ import libraries
import React, { Fragment } from "react";

//------------------------------ import components
import InstructionItem from "../cards/Card--Recipe-instruction";

//------------------------------ import styles and images
import "./styles/RecipeIngredientList.scss";

const RecipeInstructionsList = () => {
  return (
    <Fragment>
      <div className="Recipe-instructions">
        <h2>Pasos para hacer esta receta</h2>
        <div className="Recipe-instructions__container-list">
          <InstructionItem
            step="1"
            id="r1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
          />
          <InstructionItem
            step="2"
            id="r2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
          />
          <InstructionItem
            step="3"
            id="r3"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
          />
          <InstructionItem
            step="4"
            id="r4"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RecipeInstructionsList;

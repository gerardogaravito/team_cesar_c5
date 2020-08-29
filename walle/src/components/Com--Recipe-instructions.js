//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import components
import InstructionItem from "../cards/Card--Recipe-instruction";

//------------------------------ import styles and images
import "./styles/RecipeIngredientList.scss";

class RecipeInstructionsList extends Component {
  render() {
    return (
      <Fragment>
        <div className="Recipe-instructions">
          <h2>Pasos para hacer esta receta</h2>
          <div className="Recipe-instructions__container-list">
            <InstructionItem
              id="1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
            />
            <InstructionItem
              id="2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
            />
            <InstructionItem
              id="3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
            />
            <InstructionItem
              id="4"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente ex expedita fugit labore debitis?"
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RecipeInstructionsList;

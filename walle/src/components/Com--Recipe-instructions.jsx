// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import InstructionItem from '../cards/Card--Recipe-instruction';

// ------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this component render the list of instruction in a recipe page.
const RecipeInstructionsList = () => {
	// get the current data of the recipe page
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);

	return (
		<div className="Recipe-instructions">
			<h2>Pasos para hacer esta receta</h2>
			<div className="Recipe-instructions__container-list">
				{currentRecipe.instructions?.map((instruction, i = 0) => {
					// this id is needed to change the checkbox when clicked. it give an unique identifier to the entire item
					i++;
					return (
						<InstructionItem
							key={i}
							step={i}
							id={`r${i}`}
							description={instruction}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecipeInstructionsList;

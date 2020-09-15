//------------------------------ import libraries
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

//------------------------------ import components
import InstructionItem from '../cards/Card--Recipe-instruction';

//------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

//------------------------------------ COMPONENT ------------------------------------//
const RecipeInstructionsList = () => {
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);

	return (
		<Fragment>
			<div className="Recipe-instructions">
				<h2>Pasos para hacer esta receta</h2>
				<div className="Recipe-instructions__container-list">
					{currentRecipe.instructions?.map((instruction, i = 0) => {
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
		</Fragment>
	);
};

export default RecipeInstructionsList;

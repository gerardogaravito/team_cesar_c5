// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import RecipeIngredientItem from '../cards/Card--Recipe-ingredient';

// ------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this component render the list of ingredients in recipe page.
const RecipeIngredientsList = () => {
	// get the current data of the recipe page
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);

	return (
		<div className="Recipe-ingredients">
			<h2>Ingredientes</h2>
			<div className="Recipe-ingredients__container-list">
				{currentRecipe.ingredients?.map((ingredient) => {
					return <RecipeIngredientItem key={ingredient.id} {...ingredient} />;
				})}
			</div>
		</div>
	);
};

export default RecipeIngredientsList;

//------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

//------------------------------ import components
import RecipeIngredientItem from '../cards/Card--Recipe-ingredient';

//------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

//------------------------------------ COMPONENT ------------------------------------//
const RecipeIngredientsList = () => {
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);

	return (
		<div className="Recipe-ingredients">
			<h2>Ingredientes</h2>
			<div className="Recipe-ingredients__container-list">
				{currentRecipe.ingredients?.map((ingredient) => {
					return (
						<RecipeIngredientItem
							key={ingredient.id}
							name={ingredient.name}
							cant={ingredient.cant}
							und={ingredient.und}
							id={ingredient.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecipeIngredientsList;

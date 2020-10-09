import React from 'react';
/* import { useSelector } from 'react-redux'; */
import { useFetchRecipe } from '../../hooks/useFetchRecipe';

import RecipeIngredient from './RecipeIngredient';
import data from '../../../recipe.json';

const RecipeIngredientsList = () => {
	/* const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	); */
    const [recipeList] = useFetchRecipe(data.recipes)
    // console.log(recipeList);
	return (
        <div className="Recipe-ingredients">
			<div className="Recipe-ingredients__container-list">
				{recipeList.ingredients?.map((item) => {

					return (
						<RecipeIngredient
							{...item}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RecipeIngredientsList;

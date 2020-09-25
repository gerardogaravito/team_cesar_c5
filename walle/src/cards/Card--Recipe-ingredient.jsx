//------------------------------ import libraries
import React from 'react';

//------------------------------ import styles and images
import '../assets/components-style/Recipe.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the ingredient item in recipe page.
const RecipeIngredientItem = ({ id, cant, und, name }) => {
	return (
		<div className="RecipeIngredientItem">
			<input type="checkbox" name="" id={id} />
			<label className="RecipeIngredientItem__label" htmlFor={id}>
				<p className="RecipeIngredientItem__cant">{cant}</p>
				<strong>
					<p className="RecipeIngredientItem__name">{und}</p>
				</strong>
				<p className="RecipeIngredientItem__name">{name}</p>
			</label>
		</div>
	);
};

export default RecipeIngredientItem;

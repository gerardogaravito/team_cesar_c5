import React, { Fragment } from 'react';


const RecipeIngredient = ({ id, cant, und, name }) => {
	
	return (
		<Fragment>
			<div className="RecipeIngredientItem">
				<label className="RecipeIngredientItem__label" htmlFor={id}>
					<p className="RecipeIngredientItem__cant">{cant}</p>
						<p className="RecipeIngredientItem__name">{und}</p>
					<p className="RecipeIngredientItem__name">{name}</p>
				</label>
			</div>
		</Fragment>
	);
}

export default RecipeIngredient;
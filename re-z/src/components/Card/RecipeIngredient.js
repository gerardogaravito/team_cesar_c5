import React, { Fragment } from 'react';



const RecipeIngredientItem = ({ id, cant, und, name }) => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default RecipeIngredientItem;
import React from 'react';

import '../styles/RecipeIngredient.css';

const RecipeIngredient = (props) => {
	
	return (
			<div className="RecipeIngredientItem">
				<label className="RecipeIngredientItem__label" htmlFor={props.data.id}>
					<p className="RecipeIngredientItem__cant">{props.data.cant}</p>
					<p className="RecipeIngredientItem__cant--name">{props.data.und}</p>
				</label>
					<p className="RecipeIngredientItem__name">{props.data.name}</p>
					<p className="RecipeIngredientItem__price">${props.data.price} dlls</p>
			</div>
	);
}

export default RecipeIngredient;
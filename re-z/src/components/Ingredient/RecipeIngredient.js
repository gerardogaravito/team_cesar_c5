import React, { Fragment } from 'react';

import '../styles/RecipeIngredient.css';

const RecipeIngredient = (props) => {
	
	return (
		<Fragment>
			<div className="RecipeIngredientItem">
				<label className="RecipeIngredientItem__label" htmlFor={props.data.id}>
					<p className="RecipeIngredientItem__cant">{props.data.cant}</p>
						<p className="RecipeIngredientItem__cant--name">{props.data.und}</p>
					<p className="RecipeIngredientItem__name">{props.data.name}</p>
				</label>
					<p className="RecipeIngredientItem__price">${props.data.price} dlls</p>
			</div>
		</Fragment>
	);
}

export default RecipeIngredient;
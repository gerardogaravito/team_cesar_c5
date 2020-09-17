//------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

//------------------------------ import components
import { FaTrashAlt } from 'react-icons/fa';
import { deleteIngredients } from '../actions/recipeActions';
import { formatterDolar } from '../utils/formatterDolar';

//------------------------------ import styles and images
import '../assets/components-style/CartSection.scss';

const CartIngredient = ({
	id,
	ingredientName,
	ingredientUnit,
	ingredientCant,
	ingredientPrice,
}) => {
	const dispatch = useDispatch();

	const deleteIngredientById = (id) => {
		dispatch(deleteIngredients(id));
	};

	return (
		<div className="CartIngredient">
			<FaTrashAlt
				className="icon--list"
				onClick={() => deleteIngredientById(id)}
			/>
			<strong>
				<p>{ingredientName}</p>
			</strong>
			<p>{ingredientUnit}</p>
			<p>{ingredientCant}</p>
			<p> {formatterDolar.format(ingredientPrice)}</p>
		</div>
	);
};

export default CartIngredient;

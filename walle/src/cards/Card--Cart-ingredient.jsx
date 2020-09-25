// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import components
import { FaTrashAlt } from 'react-icons/fa';
import { formatterDolar } from '../utils/formatterDolar';

// -------- import redux actions
import { deleteIngredients } from '../actions/recipeActions';

// ------------------------------ import styles and images
import '../assets/components-style/CartSection.scss';

// ------------------------------------ COMPONENT ------------------------------------//
//this is th item of the list of ingredients in the shopping cart
const CartIngredient = ({ id, name, und, cant, price }) => {
	const dispatch = useDispatch();

	//this function delete the ingredients from the cart. it is an action from recipe actions. this action get the ID of the ingredient from the component
	const deleteIngredientById = (id) => {
		dispatch(deleteIngredients(id));
	};

	return (
		<div className="CartIngredient">
			<FaTrashAlt
				className="icon--list"
				// dispatch the id to the action on click
				onClick={() => deleteIngredientById(id)}
			/>
			<strong>
				<p>{name}</p>
			</strong>
			<p>{und}</p>
			<p>{cant}</p>
			<p> {formatterDolar.format(price)}</p>
		</div>
	);
};

export default CartIngredient;

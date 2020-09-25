// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import CartIngredient from '../cards/Card--Cart-ingredient';

// ------------------------------ import styles and images
import '../assets/components-style/CartSection.scss';

//------------------------------------ COMPONENT ------------------------------------//
// this component is the shopping list container. it has ingredient items
const CartSection = () => {
	// get the ingredients added to cart from recipeReducer
	const cartIngredients = useSelector(
		(state) => state.recipeReducer.cartIngredients
	);

	return (
		<div className="CartSection">
			<h2>Lista de compra</h2>
			<div className="CartSection__ingredients-container">
				{cartIngredients.map((ingredient) => {
					return <CartIngredient key={ingredient.id} {...ingredient} />;
				})}
			</div>
		</div>
	);
};

export default CartSection;

//------------------------------ import libraries
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------ import components
import CartIngredient from '../cards/Card--Cart-ingredient';

//------------------------------ import styles and images
import '../assets/components-style/CartSection.scss';

//------------------------------------ COMPONENT ------------------------------------//
const CartSection = () => {
	const cartIngredients = useSelector(
		(state) => state.recipeReducer.cartIngredients
	);

	return (
		<Fragment>
			<div className="CartSection">
				<h2>Lista de compra</h2>
				<div className="CartSection__ingredients-container">
					{cartIngredients.map((ingredient) => {
						return (
							<CartIngredient
								key={ingredient.id}
								id={ingredient.id}
								ingredientName={ingredient.name}
								ingredientUnit={ingredient.und}
								ingredientCant={ingredient.cant}
								ingredientPrice={ingredient.price}
							/>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default CartSection;

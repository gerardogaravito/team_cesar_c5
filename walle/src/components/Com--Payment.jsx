// ------------------------------ import libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import { formatterDolar } from '../utils/formatterDolar';

// -------- import redux actions
import { calculateTotal } from '../actions/usersActions';

// ------------------------------ import styles and images
import '../assets/components-style/Payment.scss';
import payoneerIcon from '../assets/images/logoPayoneer.png';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the payment component. it is in cart page.
// it is related to the shopping list items, it is listenting the changes in shopping list to update the total price
const Payment = () => {
	// get the cartIngredients in recipeReducer
	const ingredients = useSelector(
		(state) => state.recipeReducer.cartIngredients
	);
	// get the user data to set the direction
	const user = useSelector((state) => state.userReducer.user);
	// get the total of the shopping list
	const total = useSelector((state) => state.userReducer.cartTotal);
	const dispatch = useDispatch();

	// send the action calculateTotal with the ingredients in the shopping list. it recalculate when an ingredient change
	useEffect(() => {
		dispatch(calculateTotal(ingredients));
	}, [ingredients]);

	return (
		<div className="Payment">
			<div className="Payment__description">
				<div className="Payment__shipment">
					<h3>Total</h3>
					<div className="Payment__shipping-time">
						<p>Tiempo estimado de envío</p>
						<h3>45 Mins</h3>
					</div>
					<div className="input">
						<p className="input-label">Dirección:</p>
						<p className="data-direction">{user.adress}</p>
					</div>
				</div>
				<div className="Payment__total">{formatterDolar.format(total)}</div>
			</div>
			<div className="Payment__pay-button">
				Comprar <img src={payoneerIcon} alt="" />
			</div>
		</div>
	);
};

export default Payment;

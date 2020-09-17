//------------------------------ import libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------ import components
import { calculateTotal } from '../actions/usersActions';
import { formatterDolar } from '../utils/formatterDolar';

//------------------------------ import styles and images
import '../assets/components-style/Payment.scss';
import payoneerIcon from '../assets/images/logoPayoneer.png';

//------------------------------------ COMPONENT ------------------------------------//
const Payment = () => {
	const ingredients = useSelector(
		(state) => state.recipeReducer.cartIngredients
	);
	const user = useSelector((state) => state.userReducer.user);
	const total = useSelector((state) => state.userReducer.cartTotal);
	const dispatch = useDispatch();

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

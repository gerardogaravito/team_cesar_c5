// ------------------------------ import libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

// ------------------------------ import components
import { FaTimes } from 'react-icons/fa';
import SocialGarden from './SocialGarden';
import Input from './Input';

// -------- import redux actions
import { loginRequest } from '../actions/usersActions';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the form to login or singup
const Formlog = (props) => {
	const { closeModal, display } = props;
	const [form, setForm] = useState({ email: '' });
	const dispatch = useDispatch();

	// get the inputs info in form
	const handleInput = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	// send form data to store with loginRequest action
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(loginRequest(form));
		// when submit set email in session storage to get this data easier for validations
		sessionStorage.setItem('user', form.email);
		// when submit go to home page
		props.history.push('/walle');
	};

	return (
		<form className="Modal__form" onSubmit={handleSubmit}>
			<FaTimes className="icon--inactive Modal__exit" onClick={closeModal} />
			<SocialGarden />

			{/* validate if login to display the right message  */}
			{display.login ? (
				<h3 className="Modal__title">Ya estoy contigo Walle</h3>
			) : (
				<h3 className="Modal__title">Soy nuevo Walle</h3>
			)}
			<Input
				classmodifier="--centered"
				label="Correo:"
				name="email"
				type="email"
				placeholder="Fulanito@email.com"
				getInputValue={handleInput}
			/>
			<Input
				classmodifier="--centered"
				label="Contraseña:"
				name="password"
				type="password"
				placeholder="Password"
				getInputValue={handleInput}
			/>

			{/* validate if sign to display the third input */}
			{display.sign && (
				<Input
					classmodifier="--centered"
					label="Confirmar Contraseña:"
					name="confirmPassword"
					type="password"
					placeholder="confirm Password"
					getInputValue={handleInput}
				/>
			)}
			<button type="submit" className="main-button">
				Entrar
			</button>
		</form>
	);
};

export default withRouter(Formlog);

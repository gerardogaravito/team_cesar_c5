//------------------------------ import libraries
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------ import components
import Input from '../globalComponents/Input';
import { confirmUserData } from '../actions/usersActions';
import { gravatar } from '../utils/gravatar';

//------------------------------ import styles and images

const FormUser = () => {
	const user = useSelector((state) => state.userReducer.user);
	const [userData, setData] = useState({});
	const dispatch = useDispatch();

	const handleInput = (event) => {
		setData({ ...userData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(confirmUserData(userData));
	};

	return (
		<div className="UserInfo">
			<div className="UserInfo__nav">
				<img
					className="UserInfo__img"
					src={gravatar(user.email)}
					alt={user.name}
				/>
				<button type="submit" className="main-button" onClick={handleSubmit}>
					Aceptar
				</button>
			</div>
			<div className="UserInfo__description">
				<div className="UserInfo__data">
					<Input
						classmodifier=""
						label="Nombre:"
						name="name"
						type="text"
						placeholder="Pepito Perez"
						getInputValue={handleInput}
					/>
					<Input
						classmodifier=""
						label="Correo:"
						name="email"
						type="email"
						placeholder="pepitoperez@email.com"
						getInputValue={handleInput}
					/>
					<Input
						classmodifier=""
						label="Telefono:"
						name="phone"
						type="text"
						placeholder="+57 3004496371"
						getInputValue={handleInput}
					/>
				</div>
				<div className="UserInfo__direction">
					<Input
						classmodifier=""
						label="Ciudad:"
						name="city"
						type="text"
						placeholder="Tangamandapio"
						getInputValue={handleInput}
					/>
					<Input
						classmodifier=""
						label="Dirección:"
						name="adress"
						type="text"
						placeholder="calle falsa 123"
						getInputValue={handleInput}
					/>
				</div>
			</div>
		</div>
	);
};

export default FormUser;

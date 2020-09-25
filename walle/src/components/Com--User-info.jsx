// ------------------------------ import libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import FormUser from '../globalComponents/FormUser';
import { gravatar } from '../utils/gravatar';

// -------- import redux actions
import { editProfile } from '../actions/usersActions';

// ------------------------------ import styles and images
import '../assets/components-style/UserInfo.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this component has the form to change user data.
const UserInfo = () => {
	// get user data
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();

	// this function allow to edit profile. change the estate to editing
	const editUserData = () => {
		dispatch(editProfile());
	};

	// if the state is editing show the form, if not show the data
	if (user.editing) {
		return <FormUser />;
	} else {
		return (
			<div className="UserInfo">
				<div className="UserInfo__nav">
					<img
						className="UserInfo__img"
						src={gravatar(user.email)}
						alt={user.name}
					/>

					<button className="main-button" onClick={editUserData}>
						Editar
					</button>
				</div>
				<div className="UserInfo__description">
					{/* this component has validation for every item. if user set the data show it if not show a mockup data */}
					<div className="UserInfo__data">
						{user.name ? (
							<h2 className="UserInfo__name">{user.name}</h2>
						) : (
							<h2 className="UserInfo__name">Tu nombre</h2>
						)}
						{user.email ? (
							<p className="UserInfo__contact">{user.email}</p>
						) : (
							<p className="UserInfo__contact">Correo</p>
						)}
						{user.phone ? (
							<p className="UserInfo__contact">{user.phone}</p>
						) : (
							<p className="UserInfo__contact">+57 3005555555</p>
						)}
					</div>
					<div className="UserInfo__direction">
						<div className="UserInfo__direction-data">
							<p className="data-title">Ciudad:</p>
							{user.city ? (
								<p className="data-direction">{user.city}</p>
							) : (
								<p className="data-direction">Ciudad</p>
							)}
						</div>
						<div className="UserInfo__direction-data">
							<p className="data-title">Dirección:</p>
							{user.adress ? (
								<p className="data-direction">{user.adress}</p>
							) : (
								<p className="data-direction">Dirección</p>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default UserInfo;

//------------------------------ import libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------ import components
import { editProfile } from '../actions/usersActions';
import FormUser from '../globalComponents/FormUser';

//------------------------------ import styles and images
import '../assets/components-style/UserInfo.scss';
import userPic from '../assets/images/userpic.jpg';

//------------------------------------ COMPONENT ------------------------------------//
const UserInfo = () => {
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();

	const editUserData = () => {
		dispatch(editProfile());
	};

	if (user.editing) {
		return <FormUser />;
	} else {
		return (
			<div className="UserInfo">
				<div className="UserInfo__nav">
					<img
						className="UserInfo__img"
						src={userPic}
						alt="User profile picture"
					/>
					<button className="main-button" onClick={editUserData}>
						Editar
					</button>
				</div>
				<div className="UserInfo__description">
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

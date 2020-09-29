// ------------------------------ import libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { gravatar } from '../utils/gravatar';

// ------------------------------ import styles and images
import '../assets/components-style/Header.scss';
import Logo from '../assets/images/logo-walle.png';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the header component it is shown in every page
const Header = ({ handleLogin, handleSign }) => {
	const userState = useSelector((state) => state.userReducer.user);

	return (
		<header className="Header">
			{Object.keys(userState).length > 0 ? (
				<a href="/walle">
					<img className="Header__brand" src={Logo} alt="Logo de Walle" />				
				</a>
				) : (
				<a href="/">
					<img className="Header__brand" src={Logo} alt="Logo de Walle" />				
				</a>
			)}
			{/* evaluate if is data in user show user data, if not show the buttons to login or signup */}
			{Object.keys(userState).length > 0 ? (
				<div className="Header__nav">
					<Link to="/carrito">
						<FaShoppingCart className="icon--active" title="Shopping cart" />
					</Link>
					<Link to="/walle">
						<FaHome className="icon--active" title="Home" />
					</Link>
					<Link to="/usuario">
						<img
							className="Header__img"
							src={gravatar(userState.email)}
							alt={userState.name}
						/>
					</Link>
				</div>
			) : (
				<div className="Header__nav">
					<button className="second-button" onClick={handleLogin}>
						Login
					</button>
					<button className="main-button" onClick={handleSign}>
						Registro
					</button>
				</div>
			)}
		</header>
	);
};

export default Header;

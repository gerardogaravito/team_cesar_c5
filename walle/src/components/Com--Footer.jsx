// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import SocialGarden from '../globalComponents/SocialGarden';

// ------------------------------ import styles and images
import '../assets/components-style/Footer.scss';
import Logo from '../assets/images/logo-walle.png';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the footer, just have the footer and social network icons
const Footer = () => {
	const userState = useSelector((state) => state.userReducer.user);

	return (
		<footer className="Footer">
			<SocialGarden />
				{Object.keys(userState).length > 0 ? (
					<a href="/walle">
						<img className="Footer__brand" src={Logo} alt="Logo de Walle" />
					</a>
				) : (
						<a href="/">
							<img className="Footer__brand" src={Logo} alt="Logo de Walle" />
						</a>
				)}
		</footer>
	);
};

export default Footer;

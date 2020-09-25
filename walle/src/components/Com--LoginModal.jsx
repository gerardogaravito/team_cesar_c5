// ------------------------------ import libraries
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDom from 'react-dom';

// ------------------------------ import components
import Formlog from '../globalComponents/Formlog';

// ------------------------------ import styles and images
import '../assets/components-style/Login.scss';
import logo from '../assets/images/logo-walle.png';

// ------------------------------------ COMPONENT ------------------------------------ //
// this is the login modal component. it is shown only in landing page
const LoginModal = forwardRef((props, ref) => {
	const [display, setDisplay] = useState({ login: false, sign: false });

	// these are the functions referenced to landing
	useImperativeHandle(ref, () => {
		return {
			openLoginModal: () => openLoginModal(),
			openSignModal: () => openSignModal(),
		};
	});

	// functions to open and close the modal
	// this open the login version
	const openLoginModal = () => {
		setDisplay({ ...display, login: true });
	};
	// this open the sign version
	const openSignModal = () => {
		setDisplay({ ...display, sign: true });
	};
	const closeModal = () =>
		setDisplay({ ...display, login: false, sign: false });

	// validate if login or sign is true
	if (display.login || display.sign) {
		return ReactDom.createPortal(
			<section className="Modal-container">
				<div className="Modal">
					<img src={logo} alt="" className="Modal__img" />
					<Formlog closeModal={closeModal} display={display} />
				</div>
			</section>,

			document.getElementById('modal')
		);
	}
	return null;
});

export default LoginModal;

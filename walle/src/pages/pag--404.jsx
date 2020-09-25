// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import Header from '../components/Com--Header';
import Footer from '../components/Com--Footer';

// ------------------------------ import styles and images
import errorImg from '../assets/images/walle-error.png';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the error page. it has the header to nav to another page
const NotFound = () => {
	return (
		<div className="Layout--error">
			<div className="Layout__container">
				<Header />
			</div>
			<div className="Layout__404">
				<h1>404</h1>
				<h2 className="error-title">No encontramos la página</h2>
				<img src={errorImg} alt="logo de error" />
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;

//------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

//------------------------------ import components
import Header from './Com--Header';
import { FaPlus } from 'react-icons/fa';

//------------------------------ import styles and images
import '../assets/components-style/Hero.scss';
import heroPic from '../assets/images/hero-img.jpeg';

//------------------------------------ COMPONENT ------------------------------------//
const MainHero = ({
	title,
	description,
	handleLoginClick,
	handleSignClick,
	picture,
}) => {
	const userState = useSelector((state) => state.userReducer.user);

	return (
		<section className="Hero">
			<img src={picture} alt="" className="Hero__img" />
			<Header handleLogin={handleLoginClick} handleSign={handleSignClick} />
			<div className="Hero__information">
				<div className="Hero__description">
					<h1 className="Hero__title">{title}</h1>
					<p className="Hero__text">{description}</p>
				</div>
				{Object.keys(userState).length > 0 ? (
					<FaPlus className="icon--add-xxl" />
				) : (
					<button className="main-button--xxl" onClick={handleSignClick}>
						Registro
					</button>
				)}
			</div>
		</section>
	);
};

export default MainHero;

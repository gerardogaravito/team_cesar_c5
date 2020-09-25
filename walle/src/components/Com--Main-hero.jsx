// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

// ------------------------------ import components
import Header from './Com--Header';
import { FaPlus } from 'react-icons/fa';
import { getCartIngredients } from '../actions/recipeActions';

// ------------------------------ import styles and images
import '../assets/components-style/Hero.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the main hero of the app. it is shown in landing and recipe pages.
const MainHero = (props) => {
	const {
		title,
		description,
		handleLoginClick,
		handleSignClick,
		picture,
	} = props;

	// get user state from userReducer
	const userState = useSelector((state) => state.userReducer.user);
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);

	const dispatch = useDispatch();
	const addCart = () => {
		dispatch(getCartIngredients(currentRecipe.id));
	};

	return (
		<section className="Hero">
			<img src={picture} alt="" className="Hero__img" />
			<Header handleLogin={handleLoginClick} handleSign={handleSignClick} />
			<div className="Hero__information">
				<div className="Hero__description">
					{props.match.path !== '/' ? (
						<h1 className="Hero__title">{title}</h1>
					) : (
						<h1>{title}</h1>
					)}
					<p className="Hero__text">{description}</p>
				</div>
				{Object.keys(userState).length > 0 ? (
					<FaPlus className="icon--add-xxl" onClick={addCart} />
				) : (
					<button className="main-button--xxl" onClick={handleSignClick}>
						Registro
					</button>
				)}
			</div>
		</section>
	);
};

export default withRouter(MainHero);

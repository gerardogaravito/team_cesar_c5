// ------------------------------ import libraries
import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import components
import MainHero from '../components/Com--Main-hero';
import CategoryCarrousel from '../components/Com--Category-carrousel';
import RecipeDashboard from '../components/Com--Recipes-dashboard';
import InstructionsSection from '../cards/Card--InstructionsSection';
import RecommendationCarrousel from '../components/Com--Recomendations-carrousel';
import Footer from '../components/Com--Footer';
import LoginModal from '../components/Com--LoginModal';

// -------- import redux actions
import { getRecipes, setCurrentCategory } from '../actions/recipeActions';

// ------------------------------ import styles and images
import '../assets/components-style/Layout.scss';
import heroPic from '../assets/images/hero-img.jpeg';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landing page. has the reference to show the modal
const LandingPage = (props) => {
	const dispatch = useDispatch();

	// this are the functions to open and close the modal
	const modalReference = useRef();
	const openLoginModal = () => {
		modalReference.current.openLoginModal();
	};
	const openSignModal = () => {
		modalReference.current.openSignModal();
	};

	// get the recipes from the database.
	// set current category to display the recipes in dashbord according to the click in the category card
	useEffect(() => {
		dispatch(getRecipes());
		dispatch(setCurrentCategory(1));
	}, []);

	return (
		<>
			<div className="Layout">
				<MainHero
					picture={heroPic}
					title="Walle"
					description="En Walle puedes encontrar recetas para todos los gustos. Puedes comprar los ingredientes para cocinar. Nos encanta cocinar."
					handleLoginClick={openLoginModal}
					handleSignClick={openSignModal}
				/>
				<div className="Layout__body">
					<CategoryCarrousel />
					<RecipeDashboard />
					<InstructionsSection />
					<RecommendationCarrousel />
				</div>
				<Footer />
			</div>
			<LoginModal ref={modalReference} />
		</>
	);
};

export default LandingPage;

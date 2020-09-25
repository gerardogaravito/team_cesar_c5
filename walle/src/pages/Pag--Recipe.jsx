// ------------------------------ import libraries
import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import MainHero from '../components/Com--Main-hero';
import Metadata from '../cards/Card--Metadata';
import RecipeIngredientsList from '../components/Com--Recipe-ingredients';
import RecipeInstructionsList from '../components/Com--Recipe-instructions';
import RecipeCarrousel from '../components/Com--Recipe-carrousel';
import RecipeCard from '../cards/Card--Recipe-card';
import Footer from '../components/Com--Footer';

// -------- import redux actions
import { getRecipeData, getRecommendedRecipes } from '../actions/recipeActions';

// ------------------------------ import styles and images
import '../assets/components-style/Layout.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the recipe page.
// the information rendered in this page change according to the recipe the user wants to see. this data change thanks to react router
const RecipePage = (props) => {
	// get the id from router props
	const { id } = props.match.params;
	// get current recipe from recipeReducer
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);
	const dispatch = useDispatch();

	// get recommended recipes from recipeReducer
	const recipes = useSelector((state) => state.recipeReducer.recommended);

	// set recommended recipes randomly
	// get the recipe data of the path id
	useLayoutEffect(() => {
		dispatch(getRecommendedRecipes());
		dispatch(getRecipeData(id));
	}, []);

	return (
		<div className="Layout">
			<MainHero title={currentRecipe.name} picture={currentRecipe.picture} />
			<div className="Layout__body">
				<Metadata
					time={currentRecipe.preparationTime}
					portions={currentRecipe.portions}
					difficult={currentRecipe.dificult}
				/>
				<RecipeIngredientsList />
				<RecipeInstructionsList />
				<RecipeCarrousel title="Recomendados">
					{recipes?.map((recipe, i = 0) => {
						i++;
						return <RecipeCard key={recipe.id} cardId={i} {...recipe} />;
					})}
				</RecipeCarrousel>
			</div>
			<Footer />
		</div>
	);
};

export default RecipePage;

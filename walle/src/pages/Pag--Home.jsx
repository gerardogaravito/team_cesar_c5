//------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

//------------------------------ import components
import SearchHero from '../components/Com--Search-hero';
import RecipeCarrousel from '../components/Com--Recipe-carrousel';
import Footer from '../components/Com--Footer';
import RecipeCard from '../cards/Card--Recipe-card';

//------------------------------ import styles and images
import '../assets/components-style/Layout.scss';

//------------------------------------ COMPONENT ------------------------------------//
const HomePage = () => {
	const recipesCategories = useSelector((state) => state.recipeReducer.recipes);

	return (
		<div className="Layout">
			<SearchHero />
			<div className="Layout__body">
				{recipesCategories.map((recipeList) => {
					return (
						<RecipeCarrousel title={recipeList.name} key={recipeList.id}>
							{recipeList.recipes.map((recipe, i = 0) => {
								i++;
								return (
									<RecipeCard
										cardId={i}
										key={recipe.id}
										image={recipe.picture}
										name={recipe.name}
										portions={recipe.portions}
										time={recipe.preparationTime}
										difficult={recipe.dificult}
									/>
								);
							})}
						</RecipeCarrousel>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;

// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import DashboardCard from '../cards/Card--Dashboard';

// ------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

// ------------------------------------ COMPONENT ------------------------------------ //
// this component is the dashboard of recipes in landing page
const RecipeDashboard = () => {
	// get current category to show 6 recipes in the grid
	const currentRecipeState = useSelector(
		(state) => state.recipeReducer.currentCategory
	);

	return (
		<section className="Dashboard">
			<p className="Dashboard__text">
				{currentRecipeState.categoryDescription}
			</p>
			{currentRecipeState.recipes?.slice(0, 6).map((recipe, i = 0) => {
				// i is the card position in the grid
				i++;
				return (
					<DashboardCard
						key={recipe.id}
						id={recipe.id}
						name={recipe.name}
						image={recipe.picture}
						cardPosition={i}
					/>
				);
			})}
		</section>
	);
};

export default RecipeDashboard;

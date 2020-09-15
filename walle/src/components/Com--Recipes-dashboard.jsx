//------------------------------ import libraries
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//------------------------------ import components
import DashboardCard from '../cards/Card--Dashboard';

//------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

//------------------------------------ COMPONENT ------------------------------------//
const RecipeDashboard = () => {
	const currentRecipeState = useSelector(
		(state) => state.recipeReducer.currentCategory
	);

	return (
		<section className="Dashboard">
			<p className="Dashboard__text">
				{currentRecipeState.categoryDescription}
			</p>
			{currentRecipeState.recipes?.slice(0, 6).map((recipe, i = 0) => {
				i++;
				return (
					<DashboardCard
						id={recipe.id}
						key={recipe.id}
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

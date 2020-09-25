// ------------------------------ import libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import CategoryCard from '../cards/Card--Category';

// -------- import redux actions
import { setCurrentCategory } from '../actions/recipeActions';

// ------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

// ------------------------------------ COMPONENT ------------------------------------//
// this component render the caterogies in landing page.
const CategoryCarrousel = () => {
	// get the categories from recipeReducer
	const categories = useSelector((state) => state.recipeReducer.recipes);
	const dispatch = useDispatch();

	// get the category id and send to setCurrentCategory action to show in dashboard the recipes inside the specific category
	const setCurrentCategoryId = (categoryId) => {
		dispatch(setCurrentCategory(categoryId));
	};

	return (
		<section className="Ingredient-carrousel">
			<h2 className="Ingredient-carrousel__title">Nuestras recetas</h2>
			<div className="Ingredient-carrousel__cards">
				{categories.map((category) => {
					return (
						<CategoryCard
							key={category.id}
							picture={category.categoryPicture}
							name={category.name}
							handleClick={() => setCurrentCategoryId(category.id)}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default CategoryCarrousel;

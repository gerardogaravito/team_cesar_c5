//------------------------------ import libraries
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------ import components
import CategoryCard from '../cards/Card--Category';
import { setCurrentCategory } from '../actions/recipeActions';

//------------------------------ import styles and images
import '../assets/components-style/RecipeDashboard.scss';

//------------------------------------ COMPONENT ------------------------------------//
const CategoryCarrousel = () => {
	const categories = useSelector((state) => state.recipeReducer.recipes);
	const dispatch = useDispatch();

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

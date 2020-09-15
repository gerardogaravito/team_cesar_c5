import data from '../../recipe.json';

export const getRecipes = () => (dispatch) => {
	return dispatch({
		type: 'GET_RECIPES',
		payload: data.categories,
	});
};

export const setCurrentCategory = (categoryId) => (dispatch) => {
	return dispatch({
		type: 'SET_CATEGORY',
		payload: data.categories.filter((category) => category.id === categoryId),
	});
};

export const getRecipeData = (recipeId) => (dispatch) => {
	const listOfRecipes = data.categories.map((list) => list.recipes).flat();
	const recipe = listOfRecipes.filter(
		(recipe) => recipe.id === Number(recipeId)
	);

	return dispatch({
		type: 'GET_RECIPE',
		payload: recipe,
	});
};

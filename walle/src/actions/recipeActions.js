import data from '../../recipe.json';
const listOfRecipes = data.categories.map((list) => list.recipes).flat();

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
	const recipe = listOfRecipes.filter(
		(recipe) => recipe.id === Number(recipeId)
	);

	return dispatch({
		type: 'GET_CURRENT_RECIPE',
		payload: recipe,
	});
};

export const getCartIngredients = (recipeId) => (dispatch) => {
	const recipe = listOfRecipes.filter(
		(recipe) => recipe.id === Number(recipeId)
	);

	return dispatch({
		type: 'GET_CART_INGREDIENTS',
		payload: recipe,
	});
};

export const deleteIngredients = (payload) => ({
	type: 'DELETE_INGREDIENTS',
	payload,
});

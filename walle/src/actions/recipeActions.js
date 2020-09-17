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
		payload: data.categories.find((category) => category.id === categoryId),
	});
};

export const getRecipeData = (recipeId) => (dispatch) => {
	const recipe = listOfRecipes.find((recipe) => recipe.id === Number(recipeId));

	return dispatch({
		type: 'GET_CURRENT_RECIPE',
		payload: recipe,
	});
};

export const getCartIngredients = (recipeId) => (dispatch) => {
	const recipe = listOfRecipes.find((recipe) => recipe.id === Number(recipeId));

	return dispatch({
		type: 'GET_CART_INGREDIENTS',
		payload: recipe,
	});
};

export const deleteIngredients = (payload) => ({
	type: 'DELETE_INGREDIENTS',
	payload,
});

export const getRecommendedRecipes = () => (dispatch) => {
	console.log(listOfRecipes);
	const recommendedRecipes = new Array(7)
		.fill({})
		.map(
			(item) => listOfRecipes[Math.floor(Math.random() * listOfRecipes.length)]
		);

	return dispatch({
		type: 'SET_RECOMMENDED_RECIPES',
		payload: recommendedRecipes,
	});
};

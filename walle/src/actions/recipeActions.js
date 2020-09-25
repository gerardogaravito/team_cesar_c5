import data from '../../recipe.json';
// get all the recipes in a single array
const listOfRecipes = data.categories.map((list) => list.recipes).flat();

// this action get the recipes from recipe.json, it has to change to the api when is available.
export const getRecipes = () => (dispatch) => {
	return dispatch({
		type: 'GET_RECIPES',
		payload: data.categories,
	});
};

// this action creator set current category according the category card clicked in landing. get the id and find it in the data array.
export const setCurrentCategory = (categoryId) => (dispatch) => {
	return dispatch({
		type: 'SET_CATEGORY',
		payload: data.categories.find((category) => category.id === categoryId),
	});
};

// when user click a recipe card to see the details, this action get the id, filter in the recipes list and set the recipe data in payload.
export const getRecipeData = (recipeId) => (dispatch) => {
	const recipe = listOfRecipes.find((recipe) => recipe.id === Number(recipeId));

	return dispatch({
		type: 'GET_CURRENT_RECIPE',
		payload: recipe,
	});
};

// when user click the plus button in recipe card. this action get the recipe id, find it in the recipe list and set them in payload.
export const getCartIngredients = (recipeId) => (dispatch) => {
	const ingredients = listOfRecipes.find(
		(recipe) => recipe.id === Number(recipeId)
	).ingredients;

	return dispatch({
		type: 'GET_CART_INGREDIENTS',
		payload: ingredients,
	});
};

// when user click the trash can in the ingredient shopping cart, this action get the id and set it in payload.
export const deleteIngredients = (payload) => ({
	type: 'DELETE_INGREDIENTS',
	payload,
});

// when user go to recipe page, this action create an array of random recipes.
export const getRecommendedRecipes = () => (dispatch) => {
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

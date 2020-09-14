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

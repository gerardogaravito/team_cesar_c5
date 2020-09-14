import data from '../../recipe.json';

export const getRecipes = () => (dispatch) => {
	dispatch({
		type: 'GET_RECIPES',
		payload: data.recipes,
	});
};

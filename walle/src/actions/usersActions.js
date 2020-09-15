export const loginRequest = (payload) => ({
	type: 'LOGIN_REQUEST',
	payload,
});

export const addFavoriteRecipe = (payload) => ({
	type: 'ADD_FAVORITE',
	payload,
});

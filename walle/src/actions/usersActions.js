export const loginRequest = (payload) => ({
	type: 'LOGIN_REQUEST',
	payload,
});

export const setFavoriteRecipe = (payload) => ({
	type: 'SET_FAVORITE',
	payload,
});

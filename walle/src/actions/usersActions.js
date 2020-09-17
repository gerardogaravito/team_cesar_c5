export const loginRequest = (payload) => ({
	type: 'LOGIN_REQUEST',
	payload,
});

export const addFavoriteRecipe = (payload) => ({
	type: 'ADD_FAVORITE',
	payload,
});

export const calculateTotal = (ingredients) => (dispatch) => {
	const total = ingredients.reduce(
		(accumulator, current) => accumulator + current.price,
		0
	);

	dispatch({
		type: 'SET_TOTAL',
		payload: total,
	});
};

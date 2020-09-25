// get the data from the login form and set it in payload
export const loginRequest = (payload) => ({
	type: 'LOGIN_REQUEST',
	payload,
});

// when user click the heart button in recipe card, this action get the data needed to render a recipe card and set it in payload.
export const addFavoriteRecipe = (payload) => ({
	type: 'ADD_FAVORITE',
	payload,
});

// when user click the X button in favorite carrousel, this action get the id and set it payload
export const deleteFavoriteRecipe = (payload) => ({
	type: 'DELETE_FAVORITE',
	payload,
});

// this action get the ingredients in shopping cart and sum the prices
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

// this action set an editing state to user
export const editProfile = () => (dispatch) => {
	dispatch({
		type: 'EDIT_PROFILE',
		payload: true,
	});
};

// get the data from the user form and set it in payload, also change the editing state to false.
export const confirmUserData = (userData) => (dispatch) => {
	dispatch({
		type: 'END_EDIT_PROFILE',
		payload: { ...userData, editing: false },
	});
};

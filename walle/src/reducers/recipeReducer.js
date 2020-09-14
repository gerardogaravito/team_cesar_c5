const initial_state = {
	recipes: [],
	currentCategory: [],
};

const recipeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case 'GET_RECIPES':
			return { ...state, recipes: action.payload };
		case 'SET_CATEGORY':
			return { ...state, currentCategory: action.payload[0] };
		default:
			return state;
	}
};

export default recipeReducer;

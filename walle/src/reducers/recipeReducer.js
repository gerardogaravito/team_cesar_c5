const initial_state = {
	recipes: [],
	currentCategory: [],
	currentRecipe: {},
	cartIngredients: [],
};

const recipeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case 'GET_RECIPES':
			return { ...state, recipes: action.payload };
		case 'SET_CATEGORY':
			return { ...state, currentCategory: action.payload[0] };
		case 'GET_CURRENT_RECIPE':
			return { ...state, currentRecipe: action.payload[0] };
		case 'GET_CART_INGREDIENTS':
			return {
				...state,
				cartIngredients: [
					...state.cartIngredients,
					action.payload[0].ingredients,
				].flat(),
			};
		case 'DELETE_INGREDIENTS':
			return {
				...state,
				cartIngredients: state.cartIngredients.filter(
					(ingredient) => ingredient.id !== action.payload
				),
			};

		default:
			return state;
	}
};

export default recipeReducer;

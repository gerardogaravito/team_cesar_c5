const initial_state = {
	recipes: [],
	currentCategory: [],
	currentRecipe: {},
	cartIngredients: [],
	recommended: [],
};

const recipeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case 'GET_RECIPES':
			return { ...state, recipes: action.payload };
		case 'SET_CATEGORY':
			return { ...state, currentCategory: action.payload };
		case 'GET_CURRENT_RECIPE':
			return { ...state, currentRecipe: action.payload };
		case 'GET_CART_INGREDIENTS':
			return {
				...state,
				cartIngredients: [
					...state.cartIngredients,
					action.payload.ingredients,
				].flat(),
			};
		case 'DELETE_INGREDIENTS':
			return {
				...state,
				cartIngredients: state.cartIngredients.filter(
					(ingredient) => ingredient.id !== action.payload
				),
			};
		case 'SET_RECOMMENDED_RECIPES':
			return { ...state, recommended: action.payload };

		default:
			return state;
	}
};

export default recipeReducer;

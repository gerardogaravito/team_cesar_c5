const initial_state = {
	recipes: localStorage.getItem('recipes')
		? JSON.parse(localStorage.getItem('recipes'))
		: [],
	currentCategory: [],
	currentRecipe: {},
	cartIngredients: [],
	recommended: [],
};

const recipeReducer = (state = initial_state, action) => {
	switch (action.type) {
		// set recipes in payload and stored them in recipes. it set the items in local storage too.
		case 'GET_RECIPES':
			localStorage.setItem('recipes', JSON.stringify(action.payload));
			return { ...state, recipes: action.payload };

		// get the category id form payload and set it in currentCategory. this key change acording to category card selected in landing recipe dashboard
		case 'SET_CATEGORY':
			return { ...state, currentCategory: action.payload };

		// when user click a recipe card the action get the id and get the recipe in paylaod. then is stored in currentRecipe
		case 'GET_CURRENT_RECIPE':
			return { ...state, currentRecipe: action.payload };

		// when user click the plus button in recipe card or recipe page the action get the ingredients in payload. then this reducer flat the array because every card set an array of ingredients. and finally we create a reduce function to find the repeated ingredients and sum them.
		case 'GET_CART_INGREDIENTS':
			return {
				...state,
				cartIngredients: [...state.cartIngredients, action.payload]
					.flat()
					.reduce((accumulator, current) => {
						let id = current.id;
						let found = accumulator.find((item) => item.id === id);
						if (found) {
							found.cant += current.cant;
							found.price += current.price;
						} else {
							accumulator.push(current);
						}
						return accumulator;
					}, []),
			};

		// when the user click the trash icon in the shopping cart list, the action get the ingredient id and set it in payload. then this reducer filter the items in the array that aren't this payload id and return the array filtered.
		case 'DELETE_INGREDIENTS':
			return {
				...state,
				cartIngredients: state.cartIngredients.filter(
					(ingredient) => ingredient.id !== action.payload
				),
			};

		// the action set an array with random recipes in payload. then this array is stored in recommended
		case 'SET_RECOMMENDED_RECIPES':
			return { ...state, recommended: action.payload };

		default:
			return state;
	}
};

export default recipeReducer;

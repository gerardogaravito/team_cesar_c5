const initial_state = {
	user: sessionStorage.getItem('user')
		? { email: sessionStorage.getItem('user') }
		: {},
	favorites: [],
	cartTotal: 0,
	recentlyBought: [],
};

const userReducer = (state = initial_state, action) => {
	switch (action.type) {
		// get the form from action and store the user data in user
		case 'LOGIN_REQUEST':
			return { ...state, user: action.payload };

		// when user click heart button on recipe card, the action set in payload the data needed to render a card. then the reducer ask if this recipe is already in favorite list, if not set the payload in favorites key.
		case 'ADD_FAVORITE':
			const exist = state.favorites.find(
				(recipe) => recipe.id === action.payload.id
			);
			if (exist) return { ...state };
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};

		// whe user click the "X" button in favorites carrousel the action set the id in payload. then this reducer filter the recipes in favorites that aren't the id in payload and return the array filtered.
		case 'DELETE_FAVORITE':
			return {
				...state,
				favorites: state.favorites.filter(
					(recipe) => recipe.id !== action.payload
				),
			};

		// this action sum the prices of ingredients in shopping cart and set it in payload. then the total is stored in cartTotal
		case 'SET_TOTAL':
			return { ...state, cartTotal: action.payload };

		// set the key editing true in user state
		case 'EDIT_PROFILE':
			return { ...state, user: { ...state.user, editing: action.payload } };

		// the action get the data from user form and set it in payload. this reducer set the payload in the key user. always get the email from session storage when is set.
		case 'END_EDIT_PROFILE':
			return {
				...state,
				user: {
					...state.user,
					...action.payload,
					email: sessionStorage.getItem('user'),
				},
			};

		default:
			return state;
	}
};

export default userReducer;

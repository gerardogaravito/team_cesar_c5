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
		case 'LOGIN_REQUEST':
			return { ...state, user: action.payload };

		case 'ADD_FAVORITE':
			const exist = state.favorites.find(
				(recipe) => recipe.id === action.payload.id
			);
			if (exist) return { ...state };
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};

		case 'DELETE_FAVORITE':
			return {
				...state,
				favorites: state.favorites.filter(
					(recipe) => recipe.id !== action.payload
				),
			};

		case 'SET_TOTAL':
			return { ...state, cartTotal: action.payload };

		case 'EDIT_PROFILE':
			return { ...state, user: { ...state.user, editing: action.payload } };

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

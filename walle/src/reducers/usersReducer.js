const initial_state = {
	user: {},
	favorites: [],
	cartTotal: 0,
	recentlyBought: [],
};

const userReducer = (state = initial_state, action) => {
	switch (action.type) {
		case 'LOGIN_REQUEST':
			return { ...state, user: action.payload };
		case 'ADD_FAVORITE':
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case 'SET_TOTAL':
			return { ...state, cartTotal: action.payload };
		case 'EDIT_PROFILE':
			return { ...state, user: { ...state.user, editing: action.payload } };
		case 'END_EDIT_PROFILE':
			return { ...state, user: action.payload };

		default:
			return state;
	}
};

export default userReducer;

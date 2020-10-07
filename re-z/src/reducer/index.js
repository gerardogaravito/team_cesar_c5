/* import { combineReducers } from 'redux'; */
/* import userReducer from './userReducer' */

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_INGREDIENT':
            return{
                ...state,
                cart:[...state.cart, action.payload].flat().reduce((accumulator, current) => {
                    let id = current.id;
						let found = accumulator.find((item) => item.id === id);
						if (found) {
							found.cant += current.cant;
							found.price += current.price;
						} else {
							accumulator.push(current);
						}
						return accumulator;
                },[]
                )
            }
        case 'SET_FAVORITE':
            return{
                ...state,
                favoritos: [...state.favoritos, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;
//------------------------------ import libraries
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import and combine reducers
import userReducer from '../reducers/usersReducer';
import recipeReducer from '../reducers/recipeReducer';

const rootReducer = combineReducers({ userReducer, recipeReducer });

// get the enhancer to redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// made a function that return the store
export default function generateStore() {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}

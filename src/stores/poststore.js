import { createStore, applyMiddleware,combineReducers, compose } from 'redux';
import postReducer from '../reducers/postreducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () =>{
	return createStore(
			combineReducers({
				results:postReducer
			}),
			composeEnhancers(applyMiddleware(thunk))
		)
}



import { combineReducers } from 'redux';
import contentReducers from './contentReducers';

const rootReducer = combineReducers({
	top: contentReducers
});

export default rootReducer;

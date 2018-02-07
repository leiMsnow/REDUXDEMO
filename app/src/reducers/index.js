import { combineReducers } from 'redux';
import * as recipesReducer from './recipes';

debugger;
export default combineReducers(Object.assign(
	recipesReducer,
));
 
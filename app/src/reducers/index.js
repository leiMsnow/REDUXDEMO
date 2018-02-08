import { combineReducers } from 'redux';

import * as recipesReducer from './recipes';
import * as modulesReducer from './modules';

export default combineReducers(Object.assign(
	recipesReducer,
	modulesReducer
));
 
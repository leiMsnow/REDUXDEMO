import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const serviceModules = createReducer({ moduleType: 1 }, {
    [types.MODULES_TYPE](state, action) {
        return { moduleType: state };
    },
    [types.SET_MODULES_TYPE](state, action) {
        return { moduleType: action.moduleType };
    },
});

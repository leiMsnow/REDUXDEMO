import * as types from './types';

export function setServiceModules(moduleType) {
    return {
        type: types.SET_MODULES_TYPE,
        moduleType
    }
}
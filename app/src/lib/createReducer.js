export default function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.typeo)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}
import * as types from '../constants';
const initialState = {
    todos: [],
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_TODO:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
};
export default todoReducer;

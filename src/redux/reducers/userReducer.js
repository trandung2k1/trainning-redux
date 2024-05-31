const initialState = {
    users: [],
    loading: false,
    error: false,
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS_START':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case 'GET_USER_START':
            return {
                ...state,
                loading: true,
            };
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case 'GET_USER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export default userReducer;

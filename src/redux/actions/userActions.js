export const getUsersStart = () => {
    return {
        type: 'GET_USERS_START',
    };
};
export const getUsersSucess = (payload) => {
    return {
        type: 'GET_USERS_SUCCESS',
        payload,
    };
};
export const getUsersFailure = (error) => {
    return {
        type: 'GET_USERS_FAILURE',
        error,
    };
};

export const getUserStart = (payload) => {
    return {
        type: 'GET_USER_START',
        payload,
    };
};
export const getUserSucess = (payload) => {
    return {
        type: 'GET_USER_SUCCESS',
        payload,
    };
};
export const getUserFailure = (error) => {
    return {
        type: 'GET_USER_FAILURE',
        error,
    };
};

import * as actionsTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        error: error
    }
}

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
    }
}

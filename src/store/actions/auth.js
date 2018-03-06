import axios from 'axios';
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

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA0f0kMVUdZENC1zAX4e0YthFa1Ec66WF8', authData)
            .then(res => {
                console.log(res)
                dispatch(authSuccess(res.data));
            })
            .catch(error => {
                dispatch(authFail(error));
            });
    }
}

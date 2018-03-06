import axios from 'axios';
import * as actionsTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA0f0kMVUdZENC1zAX4e0YthFa1Ec66WF8';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA0f0kMVUdZENC1zAX4e0YthFa1Ec66WF8';
        }
        axios.post(url, authData)
            .then(res => {
                console.log(res.data.idToken)
                dispatch(authSuccess(res.data.idToken, res.data.localId));
            })
            .catch(error => {
                dispatch(authFail(error.response.data.error));
            });
    }
}

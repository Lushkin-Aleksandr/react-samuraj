import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            };


        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH_USER_DATA, data: {userId, email, login, isAuth}
    }
};
export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.me();

        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }


    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.logIn(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }

}
export const logout = () => async (dispatch) => {
    let data = await authAPI.logOut()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}


export default authReducer;
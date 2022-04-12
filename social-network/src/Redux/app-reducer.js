import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true
            };


        default:
            return state;
    }
}


export const initializingSuccess = () => {
    return {
        type: INITIALIZING_SUCCESS
    }
};
export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());

        Promise.all([promise])
            .then(() => {
                dispatch(initializingSuccess());
            })


    }
}


export default appReducer;
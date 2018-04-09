import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    userModel: null,
    errorMessage: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payLoad};
        case PASSWORD_CHANGED:
            return {...state, password: action.payLoad};
        case LOGIN_USER:
            return {...state, loading: true, errorMessage: ''};
        case LOGIN_USER_SUCCESS:
            /*return {...state,userModel: action.payLoad,errorMessage: '',
                loading: false,email: '',password: ''
            };*/
            return {...state, ...INITIAL_STATE, userModel: action.payLoad};
        case LOGIN_USER_FAIL:
            //return {...state, error: 'Authentication Failed', password: ''};
            return {...state, errorMessage: 'Authentication Failed.', loading: false};

        default:
            return state;
    }
};
import { AUTH, LOGOUT, ERROR, EDITPROFILE } from '../constants/actionTypes';

const initialState = {
    authData: JSON.parse(localStorage.getItem('profile')),
    errorMessage: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.data }));

            return {...state, authData: action?.data, errorMessage: '' };
        case EDITPROFILE:
            localStorage.setItem('profile', JSON.stringify({...action.data}));

            return {...state, authData: action?.data, errorMessage: '' };
        case ERROR:
            return {...state, errorMessage: action.message };
        case LOGOUT:
            localStorage.clear();

            return {...state, authData: null }
        default:
            return state;
    }
}

export default authReducer;
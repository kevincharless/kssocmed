import { AUTH, LOGOUT, ERROR, EDITPROFILE, GET_OTHER_PROFILE } from '../constants/actionTypes';

const initialState = {
    authData: JSON.parse(localStorage.getItem('profile')),
    otherProfile: [],
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
        
        case GET_OTHER_PROFILE:
            return {
                ...state,
                otherProfile: action.data
            }
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
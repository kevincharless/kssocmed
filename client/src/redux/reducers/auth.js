import { AUTH, LOGOUT, ERROR, FETCH_USERS, EDITPROFILE, FETCH_LOADING, FETCH_LOADED, GET_OTHER_PROFILE, FOLLOW_USER, GET_FOLLOW, CLEAR_OTHER_PROFILE } from '../constants/actionTypes';

const initialState = {
    authData: JSON.parse(localStorage.getItem('profile')),
    otherProfile: [],
    users: [],
    errorMessage: '',
    isLoading: true
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH:
        case EDITPROFILE:
        case FOLLOW_USER:
            localStorage.setItem('profile', JSON.stringify({ ...action.data }));

            return {...state, authData: action?.data, errorMessage: '' };
            // return {
            //     ...state,
            //     authData: action.data
            // }
        case FETCH_USERS:
            return {
                ...state,
                users: action?.payload
            }
        case GET_OTHER_PROFILE:
            return {
                ...state,
                otherProfile: action.data
            }
        case CLEAR_OTHER_PROFILE:
            return {
                ...state,
                otherProfile: []
            }
        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_LOADED: 
            return {
                ...state,
                isLoading: false
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
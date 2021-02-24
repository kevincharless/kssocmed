import { AUTH, ERROR, EDITPROFILE, FETCH_USERS, FETCH_LOADING, FETCH_LOADED, GET_OTHER_PROFILE, CLEAR_OTHER_PROFILE } from "../constants/actionTypes";
import * as api from '../../axios';

export const fetchLoading = () => ({type: FETCH_LOADING})
export const fetchLoaded = () => ({type: FETCH_LOADED})
export const clearOtherProfile = () => ({type: CLEAR_OTHER_PROFILE})

export const signIn = (formData, history) => async dispatch => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        const message = error.response.data.message 

        dispatch({ type: ERROR, message });
    }
}

export const signUp = (formData, history) => async dispatch => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const getUsers = () => async (dispatch) => {
    dispatch(fetchLoading());
    try {
        const { data } = await api.getUsers();
        
        dispatch({ type: FETCH_USERS, payload: data });
        dispatch(fetchLoaded());
    } catch (error) {
        console.log(error);
    }
}

export const editProfile = (userId, formData) => async (dispatch) => {
    try {
        const { data } = await api.editProfile(userId, formData);

        dispatch({ type: EDITPROFILE, data });
    } catch (error) {
        console.log(error);
    }
}

export const getOtherProfile = (userId) => async (dispatch) => {
    try {
        dispatch(fetchLoading());
        const { data } = await api.getOtherProfile(userId);

        dispatch({ type: GET_OTHER_PROFILE, data });
        dispatch(fetchLoaded());
    } catch (error) {
        console.log(error);
    }
}
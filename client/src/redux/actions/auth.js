import { AUTH, ERROR } from "../constants/actionTypes";
import * as api from '../../axios';

export const signIn = (formData, history) => async dispatch => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        const message = error.response.data.message;

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
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, COMMENT, UPDATECOMMENT, DELETECOMMENT } from '../constants/actionTypes';
import * as api from '../../axios';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (postId, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(postId, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (postId) => async (dispatch) => {
    try {
        await api.deletePost(postId);

        dispatch({ type: DELETE, payload: postId });
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (postId) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    try {
        const { data } = await api.likePost(postId, user?.token);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const commentPost = (postId, comment) => async (dispatch) => {
    try {
        const { data } = await api.commentPost(postId, comment);

        dispatch({ type: COMMENT, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteCommentPost = (postId, comment) => async (dispatch) => {
    try {
        const { data } = await api.deleteCommentPost(postId, comment);
        
        dispatch({ type: DELETECOMMENT, postId, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateCommentPost = (postId, updatedCommentPost) => async (dispatch) => {
    try {
        const { data } = await api.updateCommentPost(postId, updatedCommentPost);
        
        dispatch({ type: UPDATECOMMENT, postId, payload: data });
    } catch (error) {
        console.log(error);
    }
}
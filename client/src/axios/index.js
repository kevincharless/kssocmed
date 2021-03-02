import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (id, comment) => API.patch(`/posts/${id}/commentPost`, comment);
export const deleteCommentPost = (id, comment) => API.patch(`/posts/${id}/deleteCommentPost`, comment);
export const updateCommentPost = (id, updatedCommentPost) => API.patch(`/posts/${id}/updateCommentPost`, updatedCommentPost);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUsers = () => API.get('/user/getUsers');
export const googleLogin = (formData) => API.post('/user/googleLogin', formData);
export const editProfile = (userId, formData) => API.patch(`/user/${userId}/editprofile`, formData);
export const getOtherProfile = (userId) => API.get(`/user/${userId}/getotherprofile`);
export const followUser = (id) => API.patch(`/user/${id}/followUser`);
export const getFollow = (userId) => API.patch(`/user/${userId}/getFollow`);

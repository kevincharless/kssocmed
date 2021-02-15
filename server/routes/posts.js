import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, commentPost, updateCommentPost, deleteCommentPost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);
router.patch('/:id/commentPost', auth, commentPost);
router.patch('/:id/updateCommentPost', auth, updateCommentPost);
router.delete('/:id/deleteCommentPost', auth, deleteCommentPost);


export default router;
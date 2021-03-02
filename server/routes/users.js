import express from 'express';

import { signin, signup, getUsers, editProfile, getOtherProfile, registerGoogleAccount, followUser, getFollow } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/getUsers', getUsers);
router.post('/googleLogin', registerGoogleAccount);
router.patch('/:id/editprofile', editProfile);
router.get('/:id/getotherprofile', getOtherProfile);
router.patch('/:id/followUser', auth, followUser);
router.patch('/:id/getFollow', getFollow);

export default router;
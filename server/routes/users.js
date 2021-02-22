import express from 'express';

import { signin, signup, editProfile, getOtherProfile, registerGoogleAccount } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/googleLogin', registerGoogleAccount);
router.patch('/:id/editprofile', editProfile);
router.get('/:id/getotherprofile', getOtherProfile);

export default router;
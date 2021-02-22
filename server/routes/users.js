import express from 'express';

import { signin, signup, editProfile, getOtherProfile } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id/editprofile', editProfile);
router.get('/:id/getotherprofile', getOtherProfile);

export default router;
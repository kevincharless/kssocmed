import express from 'express';

import { signin, signup, editprofile } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.patch('/:id/editprofile', editprofile);

export default router;
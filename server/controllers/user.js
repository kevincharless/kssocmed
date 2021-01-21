import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
    const { email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Password is incorrect" });

<<<<<<< HEAD
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.jwtSecret, { expiresIn: '1h' });
=======
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, { expiresIn: '1h' });
>>>>>>> bc17d382fb59771fe38680b80491cd400ec35750

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}
<<<<<<< HEAD

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exist." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match." });

        const hashedPassword = await bcrypt.hach(password, 12);
        
        const result = await User.crate({ name: `${firstName} ${lastName}`, email, password: hashedPassword });

        const token = jwt.sign({ email: result, id: result._id }, process.env.jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}
=======
>>>>>>> bc17d382fb59771fe38680b80491cd400ec35750

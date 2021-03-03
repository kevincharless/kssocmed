import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';
import Post from '../models/post.js';

export const signin = async (req, res) => {
    const { email, password} = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Password is incorrect" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const signup = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exist." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Password don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);
        
        const result = await User.create({ name: `${firstName} ${lastName}`, bio: '', imageUrl: '', email, password: hashedPassword });

        const token = jwt.sign({ email: result, id: result._id }, process.env.jwtSecret, { expiresIn: '1h' });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const registerGoogleAccount = async (req, res) => {
    const { name, email, imageUrl, googleId } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.jwtSecret, { expiresIn: '1h' });
    
            res.status(200).json({ result: existingUser, token });
        } else {
            const hashedPassword = await bcrypt.hash(googleId, 12);

            const result = await User.create({ name, bio: '', imageUrl, email, password: hashedPassword });
    
            res.status(200).json({ result, token });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }     
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const editProfile = async (req, res) => {
    const { id } = req.params;
    const { name, bio, imageUrl, email } = req.body;

    const existingUser = await User.findOne({ email });

    if(!existingUser) return res.status(404).json({ message: "No user with that email" });
    
    await Post.where({ creator: String(id) }).updateMany({ name: name });

    const updatedProfile = await User.findByIdAndUpdate(req.userId, { name, bio, imageUrl, email }, { new: true });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.jwtSecret, { expiresIn: '1h' });

    res.json({ result: updatedProfile, token });
}

export const getOtherProfile = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: "No user with that Id" });
    }
}

export const followUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(req.userId);

    const index = user.followings.findIndex((fid) => fid === String(id));
    
    if (index === -1) {
        user.followings.push(id);
    } else {
        user.followings = user.followings.filter((fid) => fid !== String(id));
    }
    
    const updatedUser = await User.findByIdAndUpdate(req.userId, user, { new: true });
    
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ result: updatedUser, token });
}

// export const followUser = async (req, res) => {
//     const { id } = req.params;
    
//     const user = await User.findById(id);

//     const index = user.followers.findIndex((id) => id === String(req.userId));
//     console.log(req)
//     if (index === -1) {
//         user.followers.push(req.userId);
//     } else {
//         user.followers = user.followers.filter((id) => id !== String(req.userId));
//     }
//     const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
//     res.status(200).json(updatedUser);

// }

export const getFollow = async (req, res) => {
    const { id } = req.params;
    
    try {
        const follower = await User.findById(req.userId);

        const index = user.followers.findIndex((id) => id === String(id));

        if (index === -1) {
            follower.followings.push(id);
        } else {
            follower.followings =  follower.followings.filter((id) => id !== String(id));

        }
        const updatedUser = await User.findByIdAndUpdate(req.id, follower, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
}
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    imageUrl: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

export default mongoose.model("User", userSchema);
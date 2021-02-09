import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    caption: String,
    name: String,
    creator: String,
    creatorImage: String,
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: {name: String, comment: String, createdAt: Date},
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;
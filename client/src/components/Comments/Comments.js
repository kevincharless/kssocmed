import React from 'react'
import Comment from './Comment/Comment';
import CommentInput from './CommentInput/CommentInput';

const Comments = ({ post }) => {
    return (
        <>
            {post.comments.map(comment => (
                <Comment key={post._id} comment={comment} />
            ))}
            <CommentInput />
        </>
    )
}

export default Comments;

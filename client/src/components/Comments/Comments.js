import React from 'react'
import Comment from './Comment/Comment';
import CommentInput from './CommentInput/CommentInput';

const Comments = ({ post, user }) => {
    return (
        <>
            {post.comments.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
            <CommentInput post={post} user={user} />
        </>
    )
}

export default Comments;

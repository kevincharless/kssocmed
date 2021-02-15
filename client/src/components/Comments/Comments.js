import React, { useState } from 'react'
import Comment from './Comment/Comment';
import CommentInput from './CommentInput/CommentInput';

const Comments = ({ post, user }) => {
    const [CurrentCommentId, setCurrentCommentId] = useState();

    return (
        <>
            {post.comments.map((comment, i) => (
                <Comment key={i} comment={comment} post={post} user={user} setCurrentCommentId={setCurrentCommentId} />
            ))}
            <CommentInput post={post} user={user} CurrentCommentId={CurrentCommentId} setCurrentCommentId={setCurrentCommentId} />
        </>
    )
}

export default Comments;

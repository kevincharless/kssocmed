import React, { useState } from 'react'
import Comment from './Comment/Comment';
import CommentInput from './CommentInput/CommentInput';
import { CommentsSection, Section } from './Comments.element';

const Comments = ({ postDetail, post, user }) => {
    const [CurrentCommentId, setCurrentCommentId] = useState();

    return (
        <>
            <CommentsSection>
                <Section>
                    {postDetail ? (
                        post.comments.map((comment, i) => (
                            <Comment key={i} comment={comment} post={post} user={user} setCurrentCommentId={setCurrentCommentId} />
                        ))
                    ) : (
                        post.comments.slice(0, 2).map((comment, i) => (
                            <Comment key={i} comment={comment} post={post} user={user} setCurrentCommentId={setCurrentCommentId} />
                        ))
                    )}
                    
                </Section>
            </CommentsSection>
            <CommentInput post={post} user={user} CurrentCommentId={CurrentCommentId} setCurrentCommentId={setCurrentCommentId} />
        </>
    )
}

export default Comments;

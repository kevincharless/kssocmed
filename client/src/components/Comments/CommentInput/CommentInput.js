import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost, updateCommentPost } from '../../../redux/actions/posts';
import { Line, Container, AddComment, Button } from './CommentInput.element';

const CommentInput = ({ post, user, CurrentCommentId, setCurrentCommentId }) => {
    const [commentData, setCommentData] = useState({ _id: '', name: '', comment: '' })
    const comment = CurrentCommentId ? post.comments.find(c => c._id === CurrentCommentId) : commentData;
    const dispatch = useDispatch();

    useEffect(() => {
        setCommentData(comment);
    }, [comment])

    const handleComment = e => {
        setCommentData({
            _id: CurrentCommentId,
            name: user.name,
            comment: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(CurrentCommentId) {
            dispatch(updateCommentPost(post._id, commentData));
        } else {
            dispatch(commentPost(post._id, commentData));
        }
        setCommentData({ _id: '', name: '', comment: '' });
        setCurrentCommentId();
    }
console.log(commentData)
    return (
        <>
            <Line />
            <Container onSubmit={handleSubmit}>
                <AddComment type="text" placeholder="Add a comment..." value={commentData.comment} onChange={handleComment} />
                <Button type="submit">
                    Post
                </Button>
            </Container>
        </>
    )
}

export default CommentInput

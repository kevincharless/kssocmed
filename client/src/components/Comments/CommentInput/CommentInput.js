import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../../redux/actions/posts';
import { Line, Container, AddComment, Button } from './CommentInput.element';

const CommentInput = ({ post, user }) => {
    const [comment, setComment] = useState({ name: '', comment: '' })

    const dispatch = useDispatch();

    const handleComment = e => {
        setComment({
            name: user.name,
            comment: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(commentPost(post._id, comment));
        setComment({ name: '', comment: '' });
    }

    return (
        <>
            <Line />
            <Container onSubmit={handleSubmit}>
                <AddComment type="text" placeholder="Add a comment..." value={comment.comment} onChange={handleComment} />
                <Button type="submit">
                    Post
                </Button>
            </Container>
        </>
    )
}

export default CommentInput

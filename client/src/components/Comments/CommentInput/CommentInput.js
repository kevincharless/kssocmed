import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentPost, updateCommentPost } from '../../../redux/actions/posts';
import { Line, Container, AddComment, CancleEditButton, Button } from './CommentInput.element';

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

    const clearComment = () => {
        setCommentData({ _id: '', name: '', comment: '' });
        setCurrentCommentId();
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(CurrentCommentId) {
            dispatch(updateCommentPost(post._id, commentData));
        } else {
            dispatch(commentPost(post._id, commentData));
        }
        clearComment();   
    }
    
    return (
        <>
            <Line />
            <Container onSubmit={handleSubmit}>
                <AddComment type="text" placeholder="Add a comment..." value={commentData.comment} onChange={handleComment} />
                {CurrentCommentId ? (
                    <CancleEditButton onClick={clearComment}>
                        Cancel Edit
                    </CancleEditButton>
                ) : (
                    commentData.comment && (
                        <CancleEditButton onClick={clearComment}>
                            Cancel
                        </CancleEditButton>
                    )
                )}
                <Button type="submit">
                    Post
                </Button>
            </Container>
        </>
    )
}

export default CommentInput

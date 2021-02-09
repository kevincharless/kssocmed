import React from 'react';
import moment from 'moment';
import { Container, CommentCreatedAt } from './Comment.element';

const Comment = ({ comment }) => {
    console.log(comment.id)
    return (
        <>
            <Container>
                <b>{comment.name}</b>&nbsp;{comment.comment}
            </Container>
            <CommentCreatedAt>{moment(comment.createdAt).fromNow()}</CommentCreatedAt>
        </>
    )
    


}

export default Comment

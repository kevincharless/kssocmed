import React from 'react';
import { Container } from './Comment.element';

const Comment = ({ comment }) => {
    return (
        <>
            <Container>
                <b>{comment.name}</b>&nbsp;{comment.comment}
            </Container>
        </>
    )
    


}

export default Comment

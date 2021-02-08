import React from 'react'
import { Container, Comment, Button } from './Comments.element';

const Comments = () => {
    return (
        <Container>
            <Comment type="text" placeholder="Add a comment..." />
            <Button>
                Post
            </Button>
        </Container>
    )
}

export default Comments;

import React from 'react';
import { Container, AddComment, Button } from './CommentInput.element';

const CommentInput = () => {
    return (
        <Container>
            <AddComment type="text" placeholder="Add a comment..." />
            <Button>
                Post
            </Button>
        </Container>
    )
}

export default CommentInput

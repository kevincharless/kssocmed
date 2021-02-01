import React from 'react';
import { Container, Avatar, AvatarTag, Input, Button } from './NewPostForm.elements';

const NewPostForm = ({ user }) => {
    return (
        <Container>
            {user?.imageUrl ? (
                <Avatar src={user?.imageUrl} />
            ) : (
                <AvatarTag>{user?.name.split(' ').map(function(item){return item[0]}).join('')}</AvatarTag>
            )}
            <Input placeholder="What's Happening?"></Input>
            <Button>Post</Button>
        </Container>
    )
}

export default NewPostForm

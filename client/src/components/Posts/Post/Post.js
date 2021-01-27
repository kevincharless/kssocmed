import React from 'react';
import { RiMoreFill } from 'react-icons/ri';

import { Card, Header, Avatar, AvatarPicture, AvatarName } from './Post.element';
import kevin from '../../../assets/images/twibonhmps.jpg'

const Post = () => {
    return (
        <Card>
            <Header>
                <Avatar>
                    <AvatarPicture src={kevin} />
                    <AvatarName>Kevin Charles</AvatarName>
                </Avatar>
                <RiMoreFill style={{fontSize: '1.5rem', color: ' #176D84', cursor: 'pointer'}} />
            </Header>
        </Card>
    )
}

export default Post

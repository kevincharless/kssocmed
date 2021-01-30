import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';

import { Card, Header, Avatar, AvatarPicture, AvatarName, MoreDropDown, More, MoreContent, PostContentPicture, PostPicture } from './Post.element';
import kevin from '../../../assets/images/twibonhmps.jpg';
import tesla from '../../../assets/images/tesla.jpg';

const Post = () => {
    const [isMoreActive, setIsMoreActive] = useState(false)

    const handleMoreActive = () => {
        setIsMoreActive(!isMoreActive);
    }

    return (
        <Card>
            <Header>
                <Avatar>
                    <AvatarPicture src={kevin} />
                    <AvatarName>Kevin Charles</AvatarName>
                </Avatar>
                <MoreDropDown onClick={handleMoreActive}>
                    <RiMoreFill style={{fontSize: '1.5rem', color: ' #176D84', cursor: 'pointer'}} />
                    <More isMoreActive={isMoreActive}>
                        <MoreContent>Edit Post <FiEdit /></MoreContent>
                        <MoreContent deleteButton>Delete Post <AiFillDelete /></MoreContent>
                    </More>
                </MoreDropDown>
            </Header>
            <PostContentPicture>
                <PostPicture src={tesla} />
            </PostContentPicture>
        </Card>
    )
}

export default Post

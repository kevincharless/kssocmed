import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { deletePost, likePost } from '../../../redux/actions/posts';

import { Card, Header, Avatar, AvatarPicture, AvatarName, MoreDropDown, More, MoreContent, PostContentPicture, PostPicture, ButtonGroup, Button } from './Post.element';
import kevin from '../../../assets/images/twibonhmps.jpg';
import tesla from '../../../assets/images/tesla.jpg';


const Post = ({ post, user }) => {
    const [isMoreActive, setIsMoreActive] = useState(false);
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post.likes.length > 0) setLike(true);
    }, [])

    const handleMoreActive = () => {
        setIsMoreActive(!isMoreActive);
    }

    const handleLike = () => {
        setLike(!like);
        dispatch(likePost(post._id))
    }

    const Likes = () => {
        if (like) {
            return <FcLike /> || post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                <><FcLike />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
                <><FcLike />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        } else {
            return <FcLikePlaceholder />
        }
    };

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
            <ButtonGroup>
                <Button onClick={handleLike}>
                    <Likes />
                </Button>
            </ButtonGroup>
        </Card>
    )
}

export default Post

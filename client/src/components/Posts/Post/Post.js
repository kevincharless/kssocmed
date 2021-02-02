import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { deletePost, likePost } from '../../../redux/actions/posts';

import { Card, Header, Avatar, AvatarPicture, AvatarTag, AvatarName, MoreDropDown, More, MoreContent, PostContentPicture, PostPicture, ButtonGroup, Button, Caption } from './Post.element';
import kevin from '../../../assets/images/twibonhmps.jpg';
import tesla from '../../../assets/images/tesla.jpg';


const Post = ({ post, user }) => {
    const [isMoreActive, setIsMoreActive] = useState(false);
    const [like, setLike] = useState(false);
    const [postLike, setPostLike] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post.likes.length > 0) {
            setLike(true);
            setPostLike(post.likes.length);
        }
    }, [])
console.log(post);
    const handleMoreActive = () => {
        setIsMoreActive(!isMoreActive);
    }

    const handleLike = () => {
        setLike(!like);
        dispatch(likePost(post._id))
    }

    const Likes = () => {
        if (like) {
            return <><FcLike />&nbsp;{post.likes.length}</> || post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
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
                    {post.creatorImage.includes('/') ? (
                        <AvatarPicture src={post.creatorImage} onError={i => i.target.style.display='none'} />
                    ) : (
                        <AvatarTag>{post.creatorImage}</AvatarTag>
                    )}
                    {/* {post.imageUrl ? (
                        
                    ) : (
                        <AvatarTag>{user?.name.split(' ').map(function(item){return item[0]}).join('')}</AvatarTag>
                    )} */}
                    <AvatarName>{post.name}</AvatarName>
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
                <PostPicture src={post.selectedFile} />
            </PostContentPicture>
            <ButtonGroup>
                <Button onClick={handleLike}>
                    <Likes />
                </Button>
            </ButtonGroup>
            <Caption>
                <b>{post.name}</b>&nbsp;{post.caption}
            </Caption>
        </Card>
    )
}

export default Post

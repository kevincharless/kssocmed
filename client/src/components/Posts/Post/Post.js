import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { deletePost, likePost } from '../../../redux/actions/posts';

import { Card, Header, Avatar, AvatarPicture, AvatarTag, AvatarName, MoreDropDown, More, MoreContent, PostContentPicture, PostPicture, ButtonGroup, Button, Caption } from './Post.element';


const Post = ({ post, user }) => {
    const [isMoreActive, setIsMoreActive] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [postLike, setPostLike] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        post.likes.includes(user?.googleId || user?._id) && setIsLike(true);

        setPostLike(post.likes.length);
    }, [])
    const handleMoreActive = () => {
        setIsMoreActive(!isMoreActive);
    }

    const handleLike = () => {
        setIsLike(!isLike);
        if(isLike === false) {
            setPostLike(postLike + 1);
        } else {
            setPostLike(postLike - 1);
        }
        dispatch(likePost(post._id))
    }

    const Likes = () => {
        if (isLike) {
            return <><FcLike />&nbsp;{postLike > 2 ? `You and ${postLike - 1} others` : `${postLike} like${postLike > 1 ? 's' : ''}`}</>
        } else {
            return <><FcLikePlaceholder />&nbsp;{postLike} {postLike <= 1 ? 'Like' : 'Likes'}</>
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
                    <AvatarName>{post.name}</AvatarName>
                </Avatar>
                {(user?.googleId === post?.creator || user?._id === post?.creator) && (
                    <MoreDropDown onClick={handleMoreActive}>
                        <RiMoreFill style={{fontSize: '1.5rem', color: ' #176D84', cursor: 'pointer'}} />
                        <More isMoreActive={isMoreActive}>
                            <MoreContent>Edit Post <FiEdit /></MoreContent>
                            <MoreContent deleteButton>Delete Post <AiFillDelete /></MoreContent>
                        </More>
                    </MoreDropDown>
                )}
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

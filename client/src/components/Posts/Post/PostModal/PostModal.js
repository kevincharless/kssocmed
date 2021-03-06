import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { RiMoreFill } from 'react-icons/ri';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { deletePost, likePost } from '../../../../redux/actions/posts';

import Comment from '../../../Comments/Comments';
import { ModalDiv, CloseButton, ModalContent, ModalImage, Image, Content, Header, AvatarLink, Avatar, AvatarPicture, AvatarTag, AvatarName, MoreDropDown, More, MoreContent, Description, ButtonGroup, Button, Caption, PostCreatedAt, } from './PostModal.elements';

const PostModal = ({ isDetailActive, setIsDetailActive, post, user, setCurrentPostId }) => {
    const [isMoreActive, setIsMoreActive] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [postLike, setPostLike] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const currentUser = JSON.parse(localStorage.getItem('profile'))?.result;
    const dispatch = useDispatch();

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
            return <><FcLike style={{ fontSize: '1.1rem' }} />&nbsp;{postLike > 2 ? `You and ${postLike - 1} others` : `${postLike} like${postLike > 1 ? 's' : ''}`}</>
        } else {
            return <><FcLikePlaceholder style={{ fontSize: '1.1rem' }} />&nbsp;{postLike} {postLike <= 1 ? 'Like' : 'Likes'}</>
        }
    };

    return (
        <ModalDiv isDetailActive={isDetailActive}>
            <CloseButton>
                <IoClose onClick={() => setIsDetailActive(false)} style={{ color: '#176D84', fontSize: '1.4rem', cursor: 'pointer' }} />
            </CloseButton>
            <ModalContent>
                {post.selectedFile && (
                    <ModalImage>
                        <Image src={post.selectedFile} />
                    </ModalImage>
                )}
                <Content image={post.selectedFile}>
                    <Header>
                        <Avatar>
                            {post.creatorImage.includes('/') ? (
                                <AvatarLink to={post.creator === currentUser?._id ? `/profile` : `/${post.creator}`}>
                                    <AvatarPicture src={post.creatorImage} onError={i => i.target.style.display='none'} />
                                </AvatarLink>
                            ) : (
                                <AvatarLink to={post.creator === currentUser?._id ? `/profile` : `/${post.creator}`} styled={{ textDecoration: 'none' }}>
                                    <AvatarTag>{post.creatorImage}</AvatarTag>
                                </AvatarLink>
                            )}
                            <AvatarLink to={post.creator === currentUser?._id ? `/profile` : `/${post.creator}`}>
                                <AvatarName>{post.name}</AvatarName>
                            </AvatarLink>
                        </Avatar>
                        {(currentUser?._id === post?.creator) && (
                            <MoreDropDown onClick={handleMoreActive}>
                                <RiMoreFill style={{fontSize: '1.5rem', color: ' #176D84', cursor: 'pointer'}} />
                                <More isMoreActive={isMoreActive}>
                                    <MoreContent onClick={() => setCurrentPostId(post._id)}>Edit Post <FiEdit /></MoreContent>
                                    <MoreContent deleteButton onClick={() => setIsActive(true)}>Delete Post <AiFillDelete /></MoreContent>
                                </More>
                            </MoreDropDown>
                        )}
                    </Header>
                    <Description>
                        <Caption>
                            <b>{post.name}</b>&nbsp;{post.caption}
                        </Caption>
                        <PostCreatedAt>{moment(post.createdAt).fromNow()}</PostCreatedAt>
                        <ButtonGroup>
                            <Button onClick={handleLike}>
                                <Likes />
                            </Button>
                        </ButtonGroup>
                    </Description>
                    <Comment post={post} user={user} />
                </Content>
            </ModalContent>
        </ModalDiv>
    )
}

export default PostModal

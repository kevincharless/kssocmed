import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { RiMoreFill } from 'react-icons/ri';

import { Row, Container, CommentCreatedAt, MoreDropDown, More, MoreContent } from './Comment.element';
import Modal from '../../Modal/Modal';

const Comment = ({ comment, post, user, setCurrentCommentId }) => {
    const [isMoreActive, setIsMoreActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const handleMoreActive = () => {
        setIsMoreActive(!isMoreActive);
    }

    const handleDeletePost = () => {
        // dispatch(deleteComment(comment._id));

        setIsActive(false);
    }

    return (
        <>
            <Row>
                <Container>
                    <b>{comment.name}</b>&nbsp;{comment.comment}
                    <CommentCreatedAt>{moment(comment.createdAt).fromNow()}</CommentCreatedAt>
                </Container>
                {(user?.googleId === post?.creator || user?._id === post?.creator) && (
                    <MoreDropDown onClick={handleMoreActive}>
                        <RiMoreFill style={{ color: ' #176D84', cursor: 'pointer' }} />
                        <More isMoreActive={isMoreActive}>
                            <MoreContent onClick={() => setCurrentCommentId(comment._id)}>Edit Post <FiEdit /></MoreContent>
                            <MoreContent deleteButton onClick={() => setIsActive(true)}>Delete Post <AiFillDelete /></MoreContent>
                        </More>
                    </MoreDropDown>
                )}
            </Row>
            <Modal 
                isActive={isActive}
                setIsActive={setIsActive}
                deletePost={handleDeletePost}
                description="You want to delete this comment ?"
            />
        </>
    )
    


}

export default Comment

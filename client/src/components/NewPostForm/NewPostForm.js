import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { ImCancelCircle } from 'react-icons/im';

import { updatePost, createPost } from '../../redux/actions/posts';
import { Container, Avatar, AvatarTag, Input, CancelEditButton, CancelPopOver, AddImage, AddImageEvent, Button, ErrorMessage } from './NewPostForm.elements';
import addImage from '../../assets/images/add.svg';

const NewPostForm = ({ user, currentPostId, setCurrentPostId }) => {
    const [isPopOverActive, setIsPopOverActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [postData, setPostData] = useState({ caption: '', selectedFile: '', creatorImage: '' });
    const post = useSelector(state => currentPostId ? state.posts.posts.find(p => p._id === currentPostId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = e => {
        e.preventDefault();
        if (postData.caption || postData.selectedFile) {
            setErrorMessage('');
            if (currentPostId) {
                dispatch(updatePost(currentPostId, { ...postData, name: user?.name, creatorImage: user?.imageUrl ? user.imageUrl : user?.name.split(' ').map(function(item){return item[0]}).join('') }));
            } else {
                dispatch(createPost({ ...postData, name: user?.name, creatorImage: user?.imageUrl ? user.imageUrl : user?.name.split(' ').map(function(item){return item[0]}).join('') }));
            }
        } else {
            setErrorMessage('Please Input Something');
        }
        clear();
    }

    const clear = () => {
        setCurrentPostId(null);
        setPostData({ caption: '', selectedFile: '' });
    }

    return (
        <Container onSubmit={handleSubmit}>
            <div style={{ display: 'flex' }}>
                {user?.imageUrl ? (
                    <Avatar src={user?.imageUrl} />
                ) : (
                    <AvatarTag>{user?.name.split(' ').map(function(item){return item[0]}).join('')}</AvatarTag>
                )}
                <Input
                    name="caption"
                    placeholder="What's Happening?"
                    value={postData.caption}
                    onChange={e => setPostData({ ...postData, caption: e.target.value })}
                ></Input>
                {currentPostId ? (
                    <>
                        <CancelEditButton onClick={clear} onMouseEnter={() => setIsPopOverActive(true)} onMouseLeave={() => setIsPopOverActive(false)}>
                            <ImCancelCircle />
                        </CancelEditButton>
                        <CancelPopOver isPopOverActive={isPopOverActive}>
                            Cancel Edit
                        </CancelPopOver>
                    </>
                ) : (
                    (postData?.caption || postData?.selectedFile) && (
                        <>
                            <CancelEditButton onClick={clear} onMouseEnter={() => setIsPopOverActive(true)} onMouseLeave={() => setIsPopOverActive(false)}>
                                <ImCancelCircle />
                            </CancelEditButton>
                            <CancelPopOver isPopOverActive={isPopOverActive}>
                                Cancel
                            </CancelPopOver>
                        </>
                    )
                )}                
                
                <AddImage src={addImage} />
                <AddImageEvent>
                    <FileBase 
                        className="addImage"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                        style={{ cursor: 'pointer' }}
                    />
                </AddImageEvent>
                <Button type="submit">Post</Button>
            </div>
            {errorMessage && (
                <ErrorMessage>{`* ${errorMessage}`}</ErrorMessage>
            )}
        </Container>
    )
}

export default NewPostForm

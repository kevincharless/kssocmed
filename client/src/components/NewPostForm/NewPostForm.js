import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import { updatePost, createPost } from '../../redux/actions/posts';
import { Container, Avatar, AvatarTag, Input, AddImage, AddImageEvent, Button } from './NewPostForm.elements';
import addImage from '../../assets/images/add.svg';

const NewPostForm = ({ user, currentPostId, setCurrentPostId }) => {
    const [postData, setPostData] = useState({ caption: '', selectedFile: '', creatorImage: '' });
    const post = useSelector(state => currentPostId ? state.posts.find(p => p._id === currentPostId) : null);

    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = e => {
        e.preventDefault();

        if(currentPostId) {
            dispatch(updatePost(currentPostId, { ...postData, name: user?.name, creatorImage: user?.imageUrl ? user.imageUrl : user?.name.split(' ').map(function(item){return item[0]}).join('') }));
        } else {
            dispatch(createPost({ ...postData, name: user?.name, creatorImage: user?.imageUrl ? user.imageUrl : user?.name.split(' ').map(function(item){return item[0]}).join('') }));
        }
        clear();
    }

    const clear = () => {
        setCurrentPostId(null);
        setPostData({ caption: '', selectedFile: '' });
    }

    return (
        <Container type="submit" onSubmit={handleSubmit}>
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
            
        </Container>
    )
}

export default NewPostForm

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../../redux/actions/auth';
import FileBase from 'react-file-base64';
import { FaCheckCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Container, Card, ImageContainer, AddImage, AddImageEvent, ProfilePicture, ProfilePictureTag, ButtonContainer, EditProfileButton, CancelEditButton, SaveChangeButton, CardHeader, ProfileName, ProfileBio, ProfileNameEditMode, ProfileBioEditMode, Row, Col, Count, CountDescription } from './ProfileHeader.elements';
import addImage from '../../assets/images/add.svg';

const ProfileHeader = ({ isSidebarActive, userProfile }) => {
    const [formData, setFormData] = useState({ name: '', bio: '', imageUrl: '', email: '' });
    const [editMode, setEditMode] = useState(false);
    const posts = useSelector(state => state.posts.posts);
    const userId = userProfile?._id;
    const postsCount = posts.filter(post => post.creator === userProfile._id || post.creator === userProfile.googleId).length;
    const dispatch = useDispatch();

    useEffect(() => {
        if (editMode) {
            setFormData({ name: userProfile.givenName + userProfile.familyName || userProfile.name, bio: userProfile.bio, imageUrl: userProfile.imageUrl, email: userProfile.email })
        } else {
            setFormData({ name: '', bio: '', imageUrl: '', email: ''  });
        }
    }, [editMode, userProfile?.bio, userProfile?.familyName, userProfile?.givenName, userProfile?.imageUrl, userProfile?.name, userProfile?.email])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editProfile(userId, formData));
        setEditMode(false);
    }

    return (
        <>
            <Container>
                <Card onSubmit={handleSubmit}>
                    <ImageContainer>
                    {editMode && (
                        <>
                            <AddImage src={addImage} />
                            <AddImageEvent>
                                <FileBase 
                                    className="addImage"
                                    multiple={false}
                                    onDone={({base64}) => setFormData({ ...formData, imageUrl: base64 })}
                                    style={{ cursor: 'pointer' }}
                                />
                            </AddImageEvent>
                        </>
                    )}
                        {userProfile?.imageUrl ? (
                            <ProfilePicture src={userProfile?.imageUrl} />
                        ) : (
                            <ProfilePictureTag>{userProfile?.name?.split(' ').map(function(item){return item[0]}).join('')}</ProfilePictureTag>
                        )}
                    </ImageContainer>
                    
                    <ButtonContainer>
                        {editMode ? (
                            <>
                                <CancelEditButton isSidebarActive={isSidebarActive} onClick={() => setEditMode(false)}><GiCancel />&nbsp;Cancel Edit</CancelEditButton>
                                <SaveChangeButton type="submit" isSidebarActive={isSidebarActive}><FaCheckCircle />&nbsp;Save Change</SaveChangeButton>
                            </>
                        ) : (
                            <EditProfileButton onClick={() => setEditMode(true)}><FiEdit />&nbsp;Edit Profile</EditProfileButton>
                        )}
                    </ButtonContainer>
                    
                    <CardHeader>
                        {editMode ? (
                            <>
                                <ProfileNameEditMode type="text" value={formData?.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                                <ProfileBioEditMode type="text" value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} />
                            </>
                        ) : (
                            <>
                                <ProfileName>{userProfile?.name}</ProfileName>
                                <ProfileBio onClick={() => setEditMode(true)}>{userProfile?.bio || <p style={{ cursor: 'pointer' }}>add bio</p>}</ProfileBio>
                            </>
                        )}
                        
                        <Row>
                            <Col>
                                <Count>{postsCount}</Count>
                                <CountDescription>Posts</CountDescription>
                            </Col>
                            <Col>
                                <Count>2</Count>
                                <CountDescription>Followers</CountDescription>
                            </Col>
                            <Col>
                                <Count>2</Count>
                                <CountDescription>Following</CountDescription>
                            </Col>

                        </Row>
                    </CardHeader>
                </Card>
            </Container>
        </>
    )
}

export default ProfileHeader

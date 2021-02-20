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
    const posts = useSelector(state => state.posts);
    const profile = userProfile.result;
    const userId = profile?._id;
    const postsCount = posts.filter(post => post.creator === profile._id || post.creator === profile.googleId).length;
    const dispatch = useDispatch();

    useEffect(() => {
        if (editMode) {
            setFormData({ name: profile.givenName + profile.familyName || profile.name, bio: profile.bio, imageUrl: profile.imageUrl, email: profile.email })
        } else {
            setFormData({ name: '', bio: '', imageUrl: '', email: ''  });
        }
    }, [editMode, profile?.bio, profile?.familyName, profile?.givenName, profile?.imageUrl, profile?.name, profile?.email])

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
                        {profile?.imageUrl ? (
                            <ProfilePicture src={profile?.imageUrl} />
                        ) : (
                            <ProfilePictureTag>{profile?.name.split(' ').map(function(item){return item[0]}).join('')}</ProfilePictureTag>
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
                                <ProfileName>{profile?.name}</ProfileName>
                                <ProfileBio>Full Stack Programmer</ProfileBio>
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

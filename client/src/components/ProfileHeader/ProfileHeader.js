import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Container, Card, ProfilePicture, ProfilePictureTag, EditProfileButton, CancelEditButton, SaveChangeButton, CardHeader, ProfileName, ProfileBio, Row, Col, Count, CountDescription } from './ProfileHeader.elements';

const ProfileHeader = ({ isSidebarActive, userProfile }) => {
    const [editMode, setEditMode] = useState(false);
    const posts = useSelector(state => state.posts);
    const profile = userProfile.result;
    const postsCount = posts.filter(post => post.creator === profile._id).length

    return (
        <>
            <Container>
                <Card>
                    {profile?.imageUrl ? (
                        <ProfilePicture src={profile?.imageUrl} />
                    ) : (
                        <ProfilePictureTag>{profile?.name.split(' ').map(function(item){return item[0]}).join('')}</ProfilePictureTag>
                    )}
                    {editMode ? (
                        <>
                            <CancelEditButton isSidebarActive={isSidebarActive} onClick={() => setEditMode(false)}><GiCancel />&nbsp;Cancel Edit</CancelEditButton>
                            <SaveChangeButton isSidebarActive={isSidebarActive}><FaCheckCircle />&nbsp;Save Change</SaveChangeButton>
                        </>
                    ) : (
                        <EditProfileButton isSidebarActive={isSidebarActive} onClick={() => setEditMode(true)}><FiEdit />&nbsp;Edit Profile</EditProfileButton>
                    )}
                    <CardHeader>
                        <ProfileName>{profile?.name}</ProfileName>
                        <ProfileBio>Full Stack Programmer</ProfileBio>
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

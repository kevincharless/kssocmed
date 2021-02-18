import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, ProfilePicture, ProfilePictureTag, CardHeader, ProfileName, ProfileBio, Row, Col, Count, CountDescription } from './ProfileHeader.elements';

const ProfileHeader = ({ isSidebarActive, userProfile }) => {
    const posts = useSelector(state => state.posts);
    const profile = userProfile.result;
    const postsCount = posts.filter(post => post.creator === profile._id).length

    return (
        <>
            <Container isSidebarActive={isSidebarActive}>
                <Card>
                    {profile?.imageUrl ? (
                        <ProfilePicture src={profile?.imageUrl} isSidebarActive={isSidebarActive}/>
                    ) : (
                        <ProfilePictureTag isSidebarActive={isSidebarActive}>{profile?.name.split(' ').map(function(item){return item[0]}).join('')}</ProfilePictureTag>
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

import React, { useState, useEffect } from 'react';
import { Redirect  } from 'react-router-dom';
import { Sidebar, PageHeader, ProfileHeader, Title, Posts } from '../../components';
import { ProfilePage, Container } from './Profile.elements'

const Profile = ({ userProfile, isSidebarActive, toggleSitebar }) => {
    const [currentPostId, setCurrentPostId] = useState();
    
    const clearUserProfile = () => localStorage.clear('profile');

    useEffect(() => {
        if (!userProfile) <Redirect to="/auth" />;
    }, [userProfile]);

    return (
        <ProfilePage> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <Container>
                <PageHeader title="Profile" isSidebarActive={isSidebarActive} />
                <ProfileHeader isSidebarActive={isSidebarActive} userProfile={userProfile?.result} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                <Title title="My Post" />
                <Posts myPosts isSidebarActive={isSidebarActive} user={userProfile?.result} setCurrentPostId={setCurrentPostId} />
            </Container>
        </ProfilePage>
    )
}

export default Profile;

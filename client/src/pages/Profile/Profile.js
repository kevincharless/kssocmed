import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect  } from 'react-router-dom';
import { Sidebar, PageHeader, ProfileHeader, Title, Posts } from '../../components';

const Profile = ({ isSidebarActive, toggleSitebar }) => {
    const userProfile = useSelector(state => state.auth.authData);
    const [currentPostId, setCurrentPostId] = useState();
    
    const clearUserProfile = () => localStorage.clear('profile');

    useEffect(() => {
        if (!userProfile) <Redirect to="/auth" />;
    }, [userProfile]);

    return (
        <div style={{ width: "100%", display: "flex" }}> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <div style={{ width: '100%' }}>
                <PageHeader title="Profile" isSidebarActive={isSidebarActive} />
                <ProfileHeader isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
                <Title title="My Post" />
                <Posts myPosts isSidebarActive={isSidebarActive} user={userProfile?.result} setCurrentPostId={setCurrentPostId} />
            </div>
            
        </div>
    )
}

export default Profile;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, PageHeader, ProfileHeader } from '../../components';

const Profile = ({ isSidebarActive, toggleSitebar }) => {
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [currentPostId, setCurrentPostId] = useState();
    const history = useHistory();

    const clearUserProfile = () => setUserProfile(null);

    useEffect(() => {
        if(!userProfile) history.push('/auth');
    }, [userProfile, history]);

    return (
        <div style={{ width: "100%", display: "flex" }}> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <div style={{ width: '100%' }}>
                <PageHeader title="Profile" isSidebarActive={isSidebarActive} />
                <ProfileHeader isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
            </div>
            
        </div>
    )
}

export default Profile;

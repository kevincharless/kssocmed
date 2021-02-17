import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, ProfileHeader } from '../../components';

const Profile = ({ userProfile, isSidebarActive, toggleSitebar, clearUserProfile }) => {
    const [currentPostId, setCurrentPostId] = useState();
    const history = useHistory();

    useEffect(() => {
        if(!userProfile) history.push('/auth');
    }, [userProfile, history]);

    return (
        <div style={{ width: "100%", display: "flex" }}> 
            <Sidebar isSidebarActive={isSidebarActive} toggleSitebar={toggleSitebar} userProfile={userProfile} clearUserProfile={clearUserProfile} />
            <ProfileHeader title="Profile" isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
        </div>
    )
}

export default Profile;

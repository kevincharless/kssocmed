import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Sidebar, PageGrid } from '../../components';

const Home = ({ isSidebarActive, toggleSitebar }) => {
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
            <PageGrid title="Home" isSidebarActive={isSidebarActive} userProfile={userProfile} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
        </div>
    )
}

export default Home
